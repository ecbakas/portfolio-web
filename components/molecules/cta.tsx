import CopyMail from "./copy-mail";
import HireMe from "./hire-me";

export default function CalltoAction() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <h3 className="text-center text-3xl font-semibold">
        Let’s work together.
      </h3>
      <p className="text-center text-muted-foreground">
        Creating user experience and visual appealing design.
      </p>
      <div className="space-x-2">
        <HireMe />
        <CopyMail />
      </div>
    </div>
  );
}
