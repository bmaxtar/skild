import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import { dummySkills } from "#/lib/skills";

export const Route = createFileRoute("/")({ component: App });


function App() {
	return (
		<div id="home">
      <section className="hero">
        <div className="copy">
        <h1>
          The registery for <br />
         <span>Agentic Intelligence.</span> 
        </h1>
        <p>
          A hight-performance registery for procedural agent.
          Discover, publish, and operate reusable agent capabilities from a route-driven workspace.
          </p>
        </div>
          <div className="actions">
            <Link to="/skills" className="btn-primary">
              <Terminal size={18} />
                <span>Browse Registery</span>
            </Link>
             <Link to="/skills/new" className="btn-secondary">
                Publish Skill
            </Link>
          </div>
      </section>
        <section className="latest">
          <div className="space-y-2">
            <h2>
              Recently Created <span className="text-gradient">Skills</span>
            </h2>
            <p>
              {" "}
              Latest skills loaded from database in descending creation order.
            </p>
          </div>

          <div>
            {dummySkills.length > 0 ? (
              <div className="skills-grid">
                {dummySkills.map((skill) => (
                 <SkillCard key={skill.id} {...skill} />
                ))}
              </div>
            ) : (
              <p>No skills found.</p>
            )}
          </div>
        </section>
		</div>
	);
}
