import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

interface Stat {
  value: string;
  label: string;
}

interface SocialProofRowProps {
  stats: Stat[];
}

export function SocialProofRow({ stats }: SocialProofRowProps) {
  return (
    <Section variant="accent" className="py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <Heading variant="h1" className="text-4xl">
                {stat.value}
              </Heading>
              <Text variant="muted">{stat.label}</Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
