'use client';

import { useState } from 'react';
import AppHeader from '../layout/app-header';
import AppSidebar from '../layout/app-sidebar';
import Editor from './editor';
import RightPanel from './right-panel';

const initialContractText = `SERVICE AGREEMENT

This Service Agreement (the "Agreement") is entered into as of this __ day of __________, 2024 (the "Effective Date"), by and between:

Client: [Client Name], with a primary place of business at [Client Address] ("Client").

Service Provider: [Provider Name], with a primary place of business at [Provider Address] ("Provider").

1. SERVICES
Provider agrees to perform the following services for Client (the "Services"):
- Development of a web-based platform for contract negotiation.
- Implementation of real-time collaborative editing features.
- Integration of an AI-powered clause suggestion engine.

2. TERM
This Agreement shall commence on the Effective Date and shall continue for a period of twelve (12) months, unless terminated earlier in accordance with the terms of this Agreement.

3. COMPENSATION
Client shall pay Provider a total fee of [Total Amount] for the Services, payable in monthly installments of [Monthly Amount].

`;

export default function ContractWorkspace() {
  const [documentContent, setDocumentContent] = useState(initialContractText);

  return (
    <div className="flex h-full w-full bg-background">
      <AppSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <main className="flex flex-1 gap-4 p-4 overflow-hidden">
          <Editor
            content={documentContent}
            onContentChange={setDocumentContent}
          />
          <RightPanel documentContent={documentContent} />
        </main>
      </div>
    </div>
  );
}
