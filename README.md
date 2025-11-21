# Notion-Powered Blog

A modern, performant blog built with Next.js and Notion API, featuring advanced caching strategies and server-side rendering.

## 🎯 Project Overview

This project started as an exploration of headless CMS solutions. After comparing Contentful and Notion API, I chose to build with Notion because:
- I already use Notion daily for notes and learning materials
- Wanted to learn how Notion API integrates with Next.js
- Opportunity to turn my personal knowledge base into a public blog

## ✨ Key Features

- **📊 Notion as CMS**: Content managed directly in Notion with a familiar interface
- **⚡ Advanced Caching**: Multi-layer caching strategy using `unstable_cache` 
- **🚀 Performance Optimized**: 
  - Server-side data fetching with 1-hour cache for post listings
  - Minimized API calls to Notion (1 request/hour for homepage)
- **🎨 Modern UI**: Clean, responsive design with Tailwind CSS
- **🔍 Dynamic Filtering**: Client-side topic filtering without page reloads
- **📱 Responsive**: Mobile-first design approach

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **CMS**: Notion API
- **Styling**: Tailwind CSS
- **Caching**: Next.js `unstable_cache`
- **Rendering**: Server Components with selective client components

## 🏗️ Architecture Highlights

### Caching Strategy
```typescript
// List of posts: cached for 1 hour (all users share cache)
fetchLivePages() → unstable_cache(3600s)

// Individual post page: cached for 5 minutes
fetchPageBySlug(slug) → unstable_cache(300s)

// Post blocks/content: cached for 5 minutes
fetchPageBlocks(pageId) → unstable_cache(300s)
```

### Data Flow
```
Notion Database (Source of Truth)
        ↓
    Next.js API Layer (with caching)
        ↓
    Server Components (SSR/ISR)
        ↓
    Client Components (filtering only)
```

## 📂 Project Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Homepage (post list)
│   └── posts/[slug]/
│       └── page.tsx            # Individual post page (ISR)
├── components/
│   ├── PostCard.tsx            # Post preview card
│   ├── PostsList.tsx           # Posts grid (client-side filtering)
│   ├── TopicNav.tsx            # Topic filter navigation
│   ├── Sidebar.tsx             # Desktop sidebar
│   └── TopicBar.tsx            # Mobile topic bar
├── context/
│   └── PostsContext.tsx        # Shared state for filtering
└── lib/
    ├── notion.ts               # Notion API functions with caching
    ├── cacheConfig.ts          # Cache configuration constants
    └── notionRenderer.ts       # Notion blocks → HTML renderer
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Notion account with a database set up

### Installation

1. Clone the repository

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# .env.local
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
NOTION_DATA_SOURCE_ID=your_notion_data_source_id
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📊 Notion Database Schema

Your Notion database should have these properties:

| Property | Type | Description |
|----------|------|-------------|
| `title` | Title | Post title |
| `slug` | Rich Text | URL-friendly slug |
| `description` | Rich Text | Short description |
| `topic` | Rich Text | Category/topic |
| `tags` | Multi-select | Tags for filtering |
| `status` | Status | Publish status ("Live" for published) |
| `date` | Created time | Publication date |
| `image` | Files | Cover image |


