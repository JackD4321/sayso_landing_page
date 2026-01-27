import { Card } from './Card';
import { Badge } from './Badge';
import { Heading } from './Heading';
import { Text } from './Text';

interface MomentCardProps {
  momentLabel: string;
  whatToSay: string;
  whatToAskNext: string;
}

export function MomentCard({ momentLabel, whatToSay, whatToAskNext }: MomentCardProps) {
  return (
    <Card className="space-y-4 max-w-md">
      <Badge variant="moment">{momentLabel}</Badge>
      
      <div className="space-y-2">
        <Heading variant="h3" className="text-sm uppercase tracking-wide text-primary/60">
          What to say
        </Heading>
        <Text variant="body" className="font-medium">
          &ldquo;{whatToSay}&rdquo;
        </Text>
      </div>
      
      <div className="space-y-2">
        <Heading variant="h3" className="text-sm uppercase tracking-wide text-primary/60">
          What to ask next
        </Heading>
        <Text variant="body" className="font-medium">
          &ldquo;{whatToAskNext}&rdquo;
        </Text>
      </div>
    </Card>
  );
}
