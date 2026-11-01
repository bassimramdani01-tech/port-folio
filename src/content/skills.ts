export interface NamedFact {
  id: string;
  name: string;
}

export const skills = [
  { id: 'cisco-packet-tracer', name: 'Cisco Packet Tracer' },
  { id: 'sql', name: 'SQL' },
  { id: 'power-bi', name: 'Power BI' },
] as const satisfies readonly NamedFact[];
