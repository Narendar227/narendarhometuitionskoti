import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { MapSection } from '@/components/site/map-section'

export const metadata: Metadata = {
  title: 'Contact Home Tuitions in Koti',
  alternates: { canonical: '/contact' },
  description:
    'Ask about home tuition in Koti, Hyderabad. Tutor availability is confirmed per address. Map reference: 9FMJ+XR Hyderabad, Telangana; not a verified business address.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Contact our Koti team"
        description="Tell us about your child’s learning needs and locality. Call, WhatsApp or send us a message to ask about tutor availability."
        breadcrumbItems={[{ label: 'Contact Us' }]}
      />
      <MapSection />
    </PageShell>
  )
}
