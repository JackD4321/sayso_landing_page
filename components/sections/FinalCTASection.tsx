import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';

interface FinalCTASectionProps {
  headline: string;
  subhead: string;
  ctaText: string;
  ctaHref: string;
}

export function FinalCTASection({ headline, subhead, ctaText, ctaHref }: FinalCTASectionProps) {
  return (
    <Section variant="default" id="cta">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary rounded-2xl px-8 py-16">
          <Heading variant="h1" className="text-white">
            {headline}
          </Heading>
          <Text variant="body" className="text-white/90 text-lg">
            {subhead}
          </Text>
          <div className="pt-4">
            <Button variant="primary" href={ctaHref} className="bg-white text-primary hover:bg-white/90">
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
