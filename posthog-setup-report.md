<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the Skild TanStack Start application. Here is a summary of what was added:

- **`posthog-js`** and **`posthog-node`** packages were installed.
- **`PostHogProvider`** was added in `src/routes/__root.tsx`, wrapping the entire app for client-side tracking with automatic pageview capture, session replay, and exception tracking.
- **`PostHogIdentify`** component added in `__root.tsx` — automatically identifies the signed-in Clerk user (using their Clerk user ID, email, and full name) whenever a session is active.
- **`src/utils/posthog-server.ts`** created — a singleton `posthog-node` client for future server-side event capture in API routes.
- **Vite reverse proxy** configured in `vite.config.ts` so PostHog requests are routed through `/ingest`, improving reliability and avoiding ad-blockers.
- **Environment variables** set in `.env`: `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN`, `VITE_PUBLIC_POSTHOG_HOST`, and `POSTHOG_ASSETS_HOST`.
- **Client-side events** added to key components for conversion, engagement, and acquisition tracking.

| Event | Description | File |
|---|---|---|
| `install_command_copied` | User copies the install command for a skill | `src/components/SkillCard.tsx` |
| `skill_opened` | User clicks the Open button on a SkillCard | `src/components/SkillCard.tsx` |
| `browse_registry_clicked` | User clicks Browse Registry CTA on the homepage | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks Publish Skill CTA on the homepage | `src/routes/index.tsx` |
| `sign_in_clicked` | User clicks Sign In in the Navbar | `src/components/Navbar.tsx` |
| `user_identified` | PostHog identifies the Clerk user on sign-in | `src/routes/__root.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/387876/dashboard/1512727
- **Registry Conversion Funnel** (Browse → Sign In → Install): https://us.posthog.com/project/387876/insights/WzT2xwu9
- **Install Command Copies (Daily)**: https://us.posthog.com/project/387876/insights/E10XIbhJ
- **Publish Skill vs Browse Registry Clicks**: https://us.posthog.com/project/387876/insights/I32uCPfG
- **Skill Opens by Category**: https://us.posthog.com/project/387876/insights/dwhZNYNf
- **Daily Active Users (Sign-In Clicks)**: https://us.posthog.com/project/387876/insights/R7xDJmfN

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
