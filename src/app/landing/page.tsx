import LandingClient from './LandingClient';

export type Variant = 'default' | 'sofia' | 'sofia-pain' | 'sofia-prova' | 'sofia-rapida';

const VALID_VARIANTS: Variant[] = ['sofia', 'sofia-pain', 'sofia-prova', 'sofia-rapida'];

interface LandingPageProps {
  searchParams: Promise<{ variant?: string }>;
}

export default async function LandingPage({ searchParams }: LandingPageProps) {
  const params = await searchParams;
  const variant: Variant = VALID_VARIANTS.includes(params.variant as Variant)
    ? (params.variant as Variant)
    : 'default';

  return <LandingClient variant={variant} />;
}
