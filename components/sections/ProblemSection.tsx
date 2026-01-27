import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';

interface PainPoint {
  title: string;
  description: string;
}

interface ProblemSectionProps {
  headline: string;
  subhead?: string;
  painPoints: PainPoint[];
}

export function ProblemSection({ headline, subhead, painPoints }: ProblemSectionProps) {
  return (
    <Section variant="default">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Heading variant="h1" className="mb-4">
            {headline}
          </Heading>
          {subhead && <Text variant="muted">{subhead}</Text>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <Card key={index}>
              <Heading variant="h3" className="mb-3">
                {point.title}
              </Heading>
              <Text variant="muted">{point.description}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
