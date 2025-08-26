# Task Manager Project

This project is a **Task Manager** built with **React** and **Zustand**.  
It demonstrates a **global modal management system** supporting multiple modal types and nested modals for complex task workflows.

## Features

- Manage tasks: create, view details, assign users
- Global modal store using **Zustand**
- Multiple modal types: `TaskCreate`, `SelectUser`, `TaskDetailsContainer`
- Nested modals supported (modals can open other modals)
- Centralized `ModalProvider` for rendering active modals
- Payload passing to modals for dynamic data
- Selected user state management for `SelectUser` modal

## Getting Started

- Install dependencies
  `npm install`

- Run in development mode
  `npm run dev`

## Build for production

`npm run build`

## Project Structure

This project follows **FSD (Feature-Sliced Design)** principles to organize the codebase by features and layers, rather than by technical types.

- **Entities** – Core business objects like `Task` with their state, models, and UI components.
- **Features** – Specific functionalities that use entities, e.g., adding a task, board column operations.
- **Widgets** – Reusable complex components combining multiple features or entities, e.g., `Board` with tasks and columns.
- **Pages** – Top-level pages like `NotFound` or dashboard pages.
- **App / Providers** – Application-wide providers like `ModalProvider` and routing (`AppRouter`).
- **Shared / UI / Lib** – Common UI components, utilities, and shared state (`Zustand` store).

  /src
  ├── /app
  │ ├── providers/
  │ │ ├── App.tsx
  │ │ ├── App.css
  │ │ ├── AppRouter.tsx
  │ │ └── ModalProvider.tsx # Centralized modal rendering
  ├── /entities
  │ └── /task
  │ ├── index.ts
  │ ├── /model
  │ │ ├── taskStore.ts
  │ │ └── types.ts
  │ └── /ui
  │ ├── TaskCard.tsx
  │ ├── TaskDetailsContainer.tsx
  │ 
  ├── /features
  │ ├── /addTask
  │ │ ├── /model
  │ │ ├── constants.ts
  │ │ ├── schema.ts
  │ │ └── /ui
  │ │ ├── SelectUser.tsx
  │ │ └── TaskCreate.tsx
  │ └── /boardColumn
  │ ├── /model
  │ │ └── types.ts
  │ └── /ui
  │ ├── BoardColumn.ts
  │ ├── ColumnHeader.ts
  │ └── TaskList.ts
  ├── /pages
  │ └── /not-found/ui/NotFound.tsx
  ├── /shared
  │ ├── /lib/utils.ts
  │ ├── /model
  │ │ ├── commonStore.ts
  │ │ └── types.ts
  │ └── /ui
  │ ├── Button
  │ ├── ErrorBoundary
  │ ├── FormikField
  │ ├── FormikFileField
  │ └── Modal
  └── /widgets
  └── /board
  ├── /model/schema.ts
  └── /ui
  ├── Board.tsx
  └── BoardPage.tsx

  **Benefits:**

- Clear separation of concerns
- Easier scaling and maintenance
- Feature-oriented development and testing
- Flexible reusability of components and logic
