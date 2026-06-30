import React from '../assets/badges/react-badge.svg'
import Java from '../assets/badges/java-badge.svg'
import JavaScript from '../assets/badges/javascript-badge.svg'
import HTML from '../assets/badges/html-badge.svg'
import CSS from '../assets/badges/css-badge.svg'
import Csharp from '../assets/badges/csharp-badge.svg'
import Figma from '../assets/badges/figma-badge.svg'
import Net from '../assets/badges/net-badge.svg'
import Spring from '../assets/badges/spring-badge.svg'
import SQL from '../assets/badges/sql-badge.svg'
import PostgreSQL from '../assets/badges/postgresql-badge.svg'

export const BADGES = [
    {
        id: "react",
        label: "React",
        description: "JavaScript library for building user interfaces",
        type: "Frontend",
        image: React
    },
    {
        id: "java",
        description: "Object-oriented programming language",
        label: "Java",
        type: "Backend",
        image: Java
    },
    {
        id: "javascript",
        label: "JavaScript",
        description: "Core language of the web for dynamic functionality",
        type: "Frontend",
        image: JavaScript
    },
    {
        id: "html",
        label: "HTML",
        description: "Standard markup language for web pages",
        type: "Markup",
        image: HTML
    },
    {
        id: "css",
        label: "CSS",
        description: "Stylesheet language for beautiful and responsive design",
        type: "Styling",
        image: CSS
    },
    {
        id: "csharp",
        label: "C#",
        description: "Object-oriented language for building modern applications",
        type: "Backend",
        image: Csharp
    },
    {
        id: "figma",
        label: "Figma",
        description: "Collaborative interface design and prototyping tool",
        type: "Design",
        image: Figma
    },
    {
        id: "net",
        label: ".Net",
        description: "Framework for building cross-platform applications",
        type: "Framework",
        image: Net
    },
    {
        id: "spring",
        label: "Spring",
        description: "Framework for building Java-based backend applications",
        type: "Framework",
        image: Spring
    },
    {
        id: "sql",
        label: "SQL",
        description: "Query language for managing relational databases",
        type: "Database",
        image: SQL
    },
    {
        id: "postgresql",
        label: "PostgreSQL",
        description: "Open-source relational database management system",
        type: "Database",
        image: PostgreSQL
    },
]

export const BADGE_MAP = BADGES.reduce((map, badge) => {
    map[badge.id] = badge;
    return map;
}, {});