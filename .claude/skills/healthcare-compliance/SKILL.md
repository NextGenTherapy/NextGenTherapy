---
name: healthcare-compliance
description: Trigger when handling client data, therapy content, or compliance matters
allowed-tools: Read, Grep, Glob
---

# UK Healthcare Compliance Skill

## Professional Context
This website is for a BACP-registered psychodynamic therapist:
- **Location**: Colchester, Essex, UK
- **Services**: In-person (Colchester) and online therapy
- **Regulator**: BACP (British Association for Counselling and Psychotherapy)

## BACP Ethical Framework
All content must align with BACP's Ethical Framework for the Counselling Professions:

### Core Principles
- Being trustworthy
- Autonomy (respecting client's right to self-governance)
- Beneficence (acting in client's best interest)
- Non-maleficence (avoiding harm)
- Justice (fair treatment)
- Self-respect (fostering practitioner's self-knowledge)

### Required Disclosures
- BACP membership number and registration status
- Qualifications and training
- Professional insurance details
- Supervision arrangements
- Complaints procedure (via BACP)

## UK Data Protection (GDPR & DPA 2018)

### Lawful Basis for Processing
Contact forms require:
- Clear consent checkbox (cannot be pre-ticked)
- Link to privacy policy
- Explanation of how data will be used
- Data retention period

### Privacy Policy Requirements
- Identity and contact details of controller
- Purpose of processing
- Lawful basis for processing
- Data retention periods
- Rights of data subjects
- Right to complain to ICO

### Data Subject Rights
Website must facilitate:
- Right to access
- Right to rectification
- Right to erasure
- Right to restrict processing
- Right to data portability

## Psychodynamic Therapy Content

### Appropriate Disclaimers
- Therapy is not a substitute for emergency mental health services
- First session is assessment/consultation
- Confidentiality and its limits (safeguarding, court orders)
- Cancellation policy

### Content Guidelines
- Avoid making therapeutic claims that cannot be substantiated
- Do not promise specific outcomes
- Explain the psychodynamic approach accessibly
- Include information about the therapeutic frame

### Online Therapy Specifics
- Explain technology requirements
- Address confidentiality in online settings
- Note geographic limitations (UK clients)
- Platform security information

## Contact Form Requirements
```
Required elements:
- [ ] Consent checkbox (explicit opt-in)
- [ ] Privacy policy link
- [ ] Clear purpose statement
- [ ] No collection of sensitive health data via form
- [ ] Secure transmission (HTTPS)
```

## External Services Compliance
- Email: Resend (check data processing agreement)
- CMS: Sanity (EU data residency)
- Analytics: Vercel Analytics (privacy-focused, no cookies)
- All processors must have UK GDPR-compliant DPAs

## Emergency Information
Website should include:
- Samaritans: 116 123
- NHS Mental Health Crisis Line
- Clear statement that website is not for emergencies

## Gotchas
- HIPAA is US law - not applicable in UK
- BACP membership must be verifiable
- Never store therapy notes or client details in website systems
- Contact forms are for enquiries only, not clinical information
- Privacy policy must be UK GDPR compliant, not generic
- Online therapy has specific confidentiality considerations
