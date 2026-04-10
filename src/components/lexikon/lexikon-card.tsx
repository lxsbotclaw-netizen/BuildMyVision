import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CATEGORY_LABELS, type LexikonEntry } from "@/data/lexikon";

interface LexikonCardProps {
  entry: LexikonEntry;
}

export function LexikonCard({ entry }: LexikonCardProps) {
  return (
    <Link href={`/lexikon/${entry.slug}`} className="group">
      <Card className="h-full transition-colors group-hover:bg-muted/50">
        <CardHeader>
          <div className="mb-1 text-xs font-medium text-muted-foreground">
            {CATEGORY_LABELS[entry.category]}
          </div>
          <CardTitle className="text-lg">{entry.term}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {entry.shortDefinition}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
