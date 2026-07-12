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
import Python from '../assets/badges/python-badge.svg'

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
        description: "Programming language for the web",
        type: "Frontend",
        image: JavaScript
    },
    {
        id: "html",
        label: "HTML",
        description: "Markup language for web pages",
        type: "Markup",
        image: HTML
    },
    {
        id: "css",
        label: "CSS",
        description: "Styles web pages and user interfaces",
        type: "Styling",
        image: CSS
    },
    {
        id: "csharp",
        label: "C#",
        description: "Object-oriented programming language",
        type: "Backend",
        image: Csharp
    },
    {
        id: "figma",
        label: "Figma",
        description: "Interface design and prototyping tool",
        type: "Design",
        image: Figma
    },
    {
        id: "net",
        label: ".Net",
        description: "Framework for building applications",
        type: "Framework",
        image: Net
    },
    {
        id: "spring",
        label: "Spring",
        description: "Framework for Java applications",
        type: "Framework",
        image: Spring
    },
    {
        id: "sql",
        label: "SQL",
        description: "Language for working with relational databases",
        type: "Database",
        image: SQL
    },
    {
        id: "postgresql",
        label: "PostgreSQL",
        description: "Relational database management system",
        type: "Database",
        image: PostgreSQL
    },
    {
        id: "python",
        label: "Python",
        description: "General-purpose programming language",
        type: "Backend",
        image: Python
    },
]

export const BADGE_MAP = BADGES.reduce((map, badge) => {
    map[badge.id] = badge;
    return map;
}, {});