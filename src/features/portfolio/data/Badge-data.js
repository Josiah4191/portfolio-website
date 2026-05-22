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
        image: React
    },
    {
        id: "java",
        label: "Java",
        image: Java
    },
    {
        id: "javascript",
        label: "JavaScript",
        image: JavaScript
    },
    {
        id: "html",
        label: "HTML",
        image: HTML
    },
    {
        id: "css",
        label: "CSS",
        image: CSS
    },
    {
        id: "csharp",
        label: "C#",
        image: Csharp
    },
    {
        id: "figma",
        label: "Figma",
        image: Figma
    },
    {
        id: "net",
        label: ".Net",
        image: Net
    },
    {
        id: "spring",
        label: "Spring",
        image: Spring
    },
    {
        id: "sql",
        label: "SQL",
        image: SQL
    },
    {
        id: "postgresql",
        label: "PostgreSQL",
        image: PostgreSQL
    },
]

export const BADGE_MAP = BADGES.reduce((map, badge) => {
    map[badge.id] = badge;
    return map;
}, {});