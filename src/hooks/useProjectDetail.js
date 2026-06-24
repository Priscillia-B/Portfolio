import { useState, useEffect, useCallback } from "react";
import { projectsData } from "../data/projects";
import { useNavigate } from "react-router-dom";

export function useProjectDetail(id) {
  const project = projectsData.find((p) => p.id === id);
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const [prevId, setPrevId] = useState(id);
  if (id !== prevId) {
    setPrevId(id);
    setCurrentIndex(0);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const prevSlide = useCallback(() => {
    if (!project?.gallery) return;
    setCurrentIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  }, [project]);

  const nextSlide = useCallback(() => {
    if (!project?.gallery) return;
    setCurrentIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  const handleGoBack = useCallback((e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [navigate]);

  return {
    project,
    currentIndex,
    setCurrentIndex,
    prevSlide,
    nextSlide,
    handleGoBack,
    onTouchHandlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
  };
}