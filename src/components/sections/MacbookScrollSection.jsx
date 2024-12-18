import { MacbookScroll } from "../ui/macbook-scroll";

export function MacbookScrollSection() {
  return (
    <div className="overflow-hidden w-full">
      <MacbookScroll
        src={`https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        showGradient={false}
      />
    </div>
  );
}
