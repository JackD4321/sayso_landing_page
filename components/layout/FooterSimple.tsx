import { Container } from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';
import { Divider } from '@/components/ui/Divider';

export function FooterSimple() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <Container>
        <div className="py-8">
          <Divider className="mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Text variant="small" className="text-center sm:text-left">
              © 2026 Sayso. All rights reserved.
            </Text>
            <div className="flex gap-6">
              <a href="#" className="text-small text-primary/60 hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-small text-primary/60 hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-small text-primary/60 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
