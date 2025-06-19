import { RoleCard } from "../components/RoleCard";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaf6f8]">
      <main className="flex flex-col items-center gap-6 py-12 px-4">
        <RoleCard
          label="College Student"
          image="/images/student.png"
          href="/survey/student"
        />
        <RoleCard
          label="Staff"
          image="/images/staff.png"
          href="/survey/staff"
        />

        <RoleCard
          label="Teacher / Professor"
          image="/images/teacher.png"
          href="/survey/teacher"
        />
      </main>
    </div>
  );
}
