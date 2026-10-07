export interface NamedFact {
  id: string;
  name: string;
}

export const skills = [
  { id: 'cisco-packet-tracer', name: 'Cisco Packet Tracer' },
  { id: 'sql', name: 'SQL' },
  { id: 'power-bi', name: 'Power BI' },
] as const satisfies readonly NamedFact[];

export const interests = [
  { id: 'ai-agent-architecture', name: 'AI agent architecture' },
  { id: 'building-ai-agents', name: 'Building AI agents' },
  { id: 'prompt-engineering', name: 'Prompt engineering' },
  { id: 'nlp', name: 'NLP' },
  { id: 'data-engineering', name: 'Data engineering' },
] as const satisfies readonly NamedFact[];
