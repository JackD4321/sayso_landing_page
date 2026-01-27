import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { IconWrapper } from '@/components/ui/IconWrapper';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksStepsProps {
  headline: string;
  steps: Step[];
}

export function HowItWorksSteps({ headline, steps }: HowItWorksStepsProps) {
  return (
    <Section variant="accent">
      <Container>
        <Heading variant="h1" className="text-center mb-12">
          {headline}
        </Heading>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center space-y-4">
              <IconWrapper size="lg" className="mx-auto bg-primary text-white rounded-full font-bold">
                <span className="text-2xl">{step.number}</span>
              </IconWrapper>
              <Heading variant="h2">{step.title}</Heading>
              <Text variant="muted">{step.description}</Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
