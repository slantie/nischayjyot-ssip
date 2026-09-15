# NishchayJyot - Unified Grievance Portal Demo

A frontend-only Next.js portfolio demo based on the supplied project synopsis and speech for a proposed One Nation One Challan customer grievance portal.

## Setup

```bash
npm install
npm run dev
npm run build
```

Open `http://localhost:3000`.

## Project status

This is a local, fictional demonstration. It is not deployed, not connected to government systems, and does not include real authentication, storage, notifications, or AI services.

## Included demo journeys

- Public explanation and lodge/track actions
- Three-step grievance flow with local evidence attachment control and generated demonstration reference
- Tracking timeline and seeded not-found state
- Citizen workspace with filtering and locally simulated reopen action
- Administration queue with filters, case details, and local status updates

## Demo reference IDs

- `NJC-2026-00482` - active grievance
- `NJC-2026-00461` - under-review grievance
- `NJC-2026-00419` - resolved grievance

## Architecture

The demo is a Next.js client page with typed fixture data and React local state. No backend, database, API key, or external service is needed. Changes last only for the current browser session.

## Source-based functionality

The supplied PDFs propose a centralized e-challan grievance portal, tracking, notifications, feedback/appeals, state and central administration roles, analytics, and AI/NLP-assisted lodging/helpdesk.

## Demo enhancements and substitutions

- The original AI routing proposal is represented as a transparent deterministic routing simulation.
- Cases, departments, users, dates, metrics, and reference IDs are fictional.
- The new UI is a portfolio implementation. Supplied historic UI images remain source reference material only.

## Limitations

No live notifications, file upload, authentication, persistence, government integration, language service, chatbot, analytics service, or production security controls are implemented.
