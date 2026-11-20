import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Curriculum } from '@/components/site/curriculum'

export const metadata: Metadata = {
  title: 'Home Tuition Subjects in Koti',
  alternates: { canonical: '/subjects' },
  description:
    'Mathematics, Science, English and more — home tutors in Koti, Hyderabad for all classes and CBSE, ICSE and State Board.',
}

export default function SubjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Subjects"
        title="All subjects, all classes, all boards"
        description="Whatever the subject or grade, we have the right tutor to help your child succeed."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Subjects' },
        ]}
      />
      <Curriculum />
    </PageShell>
  )
}
