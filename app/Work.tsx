import { ProjectGrid } from "@common/components";
import { useProjectsMeta } from "@common/hooks";

export function Work() {
   const projects = useProjectsMeta();
   return (
      <>
         <div className="flex flex-col space-y-8">
            <h3>What I&apos;ve been working on 🛠️</h3>
            <p>
               A deeper dive into some of the projects and teams I&apos;ve
               devoted my time to.
            </p>
         </div>
         <ProjectGrid projects={projects} />
      </>
   );
}
