import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import TargetSection from './components/TargetSection';
import FunnelSection from './components/FunnelSection';
import WorkflowSection from './components/WorkflowSection';
import ChannelsSection from './components/ChannelsSection';
import MetricsSection from './components/MetricsSection';
import ScheduleSection from './components/ScheduleSection';
import TimelineSection from './components/TimelineSection';
import NextSteps from './components/NextSteps';

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
