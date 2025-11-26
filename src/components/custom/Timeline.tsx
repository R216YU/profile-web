import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

interface TimelineProps {
  title?: string;
  data: TimelineEntry[];
  className?: string;
}

export default function Timeline({
  title,
  data,
  className = "",
}: TimelineProps) {
  return (
    <section className={`bg-background py-16 ${className}`}>
      <div className="container">
        {title && (
          <h1 className="text-foreground mb-6 text-center text-xl font-bold tracking-tighter sm:text-3xl">
            {title}
          </h1>
        )}
        <div className="relative mx-auto max-w-2xl">
          <Separator
            orientation="vertical"
            className="bg-muted absolute left-1.5 top-4"
          />
          {data.map((entry, index) => (
            <div key={index} className="relative mb-6 pl-6">
              <div className="bg-foreground absolute left-0 top-2.5 flex size-3 items-center justify-center rounded-full" />
              <h4 className="rounded-xl py-1 text-base font-bold tracking-tight xl:mb-2 xl:px-2">
                {entry.title}
              </h4>

              <h5 className="text-xs -left-18 text-muted-foreground top-2 rounded-xl tracking-tight xl:absolute">
                {entry.date}
              </h5>

              <Card className="my-3 border-none shadow-none">
                <CardContent className="px-0 xl:px-1">
                  <div
                    className="prose dark:prose-invert text-foreground"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
