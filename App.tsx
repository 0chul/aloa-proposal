import React from 'react';
import Layout from './components/Layout.tsx';
import Hero from './components/Hero.tsx';
import WhySection from './components/WhySection.tsx';
import TargetSection from './components/TargetSection.tsx';
import FunnelSection from './components/FunnelSection.tsx';
import WorkflowSection from './components/WorkflowSection.tsx';
import ChannelsSection from './components/ChannelsSection.tsx';
import MetricsSection from './components/MetricsSection.tsx';
import ScheduleSection from './components/ScheduleSection.tsx';
import TimelineSection from './components/TimelineSection.tsx';
import NextSteps from './components/NextSteps.tsx';

function App() {
  return (
    <Layout>
      <Hero />
      <WhySection />
      <TargetSection />
      <FunnelSection />
      <WorkflowSection />
      <ChannelsSection />
      <MetricsSection />
      <ScheduleSection />
      <TimelineSection />
      <NextSteps />
    </Layout>
  );
}

export default App;