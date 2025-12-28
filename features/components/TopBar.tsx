"use client";
import "./TopBar.css";
import useScrollPosition from "@/app/hooks/useScrollPosition";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

type TopBarProps = {
  variant: "back" | "text";
};

export default function TopBar({ variant }: TopBarProps) {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`artigo-nav ${scrollPosition > 20 ? "artigo-nav-blur" : ""}`}
    >
      <div className="container-artigo">
        {variant === "back" ? (
          <div className="voltar-artigos">
            <FaArrowLeft />
            <Link href="/artigos">Voltar aos artigos</Link>
          </div>
        ) : (
          <span style={{ fontSize: "20px" }}>Artigos</span>
        )}
      </div>
    </nav>
  );
}
