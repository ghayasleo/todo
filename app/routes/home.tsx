import React from "react";
import type { Route } from "./+types/home";
import logo from "../assets/svg/logo.svg";
import Header from "~/components/header";
import Todo from "~/components/todo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Header />

      <Todo />
    </main>
  );
}
