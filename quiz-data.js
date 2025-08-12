// quiz-data.js
const quizData = [
  { q: `What are aphthous ulcers and what conditions are they associated with?`,
    a: `Painful, shallow oral ulcers covered by yellowish exudate. Associated with celiac disease, IBD, SLE, Behçet syndrome, and HIV.` },

  { q: `What is the most common malignancy of the oral cavity and its risk factors?`,
    a: `Squamous cell carcinoma. Risks: tobacco, alcohol, HPV-16. Appears as a nonhealing ulcer with irregular borders.` },

  { q: `What is sialolithiasis and how does it present?`,
    a: `Stone formation in major salivary gland ducts. Presents as recurrent pre-/periprandial pain and swelling in the gland.` },

  { q: `What causes sialadenitis?`,
    a: `Obstruction, infection (e.g., Staph aureus, mumps virus), or autoimmune diseases like Sjögren syndrome.` },

  { q: `What is a pleomorphic adenoma?`,
    a: `Most common benign salivary gland tumor. Contains chondromyxoid stroma and epithelium. Can recur or become malignant.` },

  { q: `What is a Warthin tumor and its association?`,
    a: `Benign cystic salivary gland tumor with germinal centers. Associated with smoking. "Warriors from Germany love smoking."` },

  { q: `What is the most common malignant salivary tumor?`,
    a: `Mucoepidermoid carcinoma, composed of mucinous and squamous components.` },

  { q: `What is achalasia and its mechanism?`,
    a: `Failure of LES relaxation due to degeneration of inhibitory neurons (NO, VIP) in myenteric plexus.` },

  { q: `What causes secondary achalasia?`,
    a: `Chagas disease (T. cruzi) or malignancy compressing the esophagus.` },

  { q: `What is the classic sign of achalasia on barium swallow?`,
    a: `"Bird’s beak" sign: dilated esophagus with distal narrowing.` },

  { q: `What is GERD and what are its symptoms?`,
    a: `Transient LES relaxation causing heartburn, regurgitation, dysphagia, cough, hoarseness. Linked to asthma.` },

  { q: `What are complications of GERD?`,
    a: `Erosive esophagitis, strictures, and Barrett esophagus.` },

  { q: `What is eosinophilic esophagitis?`,
    a: `Chronic immune-mediated condition with eosinophils in mucosa. Associated with asthma, shows rings and furrows on endoscopy.` },

  { q: `What is Plummer-Vinson syndrome?`,
    a: `Triad: dysphagia, iron deficiency anemia, esophageal webs. Increased risk of squamous cell carcinoma.` },

  { q: `What is Mallory-Weiss syndrome?`,
    a: `Mucosal tears at gastroesophageal junction due to vomiting. Presents with hematemesis.` },

  { q: `What are esophageal varices and what causes them?`,
    a: `Dilated submucosal veins in lower esophagus due to portal hypertension. Risk of fatal bleeding.` },

  { q: `What is distal esophageal spasm and its presentation?`,
    a: `Uncoordinated contractions with normal LES pressure. Chest pain and dysphagia. Barium: corkscrew esophagus.` },

  { q: `What causes scleroderma esophagus?`,
    a: `Atrophy of esophageal smooth muscle → low LES pressure → reflux, Barrett esophagus, aspiration.` },

  { q: `What is Boerhaave syndrome?`,
    a: `Transmural esophageal rupture from retching. Can cause pneumomediastinum and subcutaneous emphysema.` },

  { q: `What is Barrett esophagus?`,
    a: `Metaplasia of esophageal epithelium to nonciliated columnar with goblet cells. Caused by GERD. Risk of adenocarcinoma.` },

  { q: `What are the types and risks of esophageal cancer?`,
    a: `Squamous cell (upper 2/3): alcohol, smoking, hot drinks. Adenocarcinoma (lower 1/3): GERD, obesity, Barrett.` },

  { q: `What causes acute gastritis?`,
    a: `NSAIDs, burns (Curling ulcers), brain injury (Cushing ulcers). Leads to mucosal erosions.` },

  { q: `What causes chronic gastritis?`,
    a: `H. pylori (antrum first) or autoimmune (antibodies to parietal cells and intrinsic factor; affects fundus/body).` },

  { q: `What is Ménétrier disease?`,
    a: `Gastric mucosa hyperplasia → giant rugae, protein loss, low acid. Precancerous. WAVEE: Weight loss, Anorexia, Vomiting, Epigastric pain, Edema.` },

  { q: `What is the most common gastric cancer?`,
    a: `Gastric adenocarcinoma. Risk factors: H. pylori, nitrosamines, smoking, chronic gastritis.` },

  { q: `How does intestinal-type gastric cancer appear?`,
    a: `Ulcer with raised margins, usually on lesser curvature. Linked to H. pylori and nitrosamines.` },

  { q: `What are signet ring cells?`,
    a: `Mucin-filled cells with peripheral nuclei seen in diffuse-type gastric cancer.` },

  { q: `What are Virchow and Krukenberg signs of gastric cancer?`,
    a: `Virchow: supraclavicular node. Krukenberg: bilateral ovarian mets with signet ring cells.` },

  { q: `What is Sister Mary Joseph nodule?`,
    a: `Periumbilical subcutaneous metastasis from gastric cancer.` },

  { q: `What is Blumer shelf?`,
    a: `Rectal mass felt on digital exam, suggesting peritoneal metastasis from gastric cancer.` },

  { q: `How do gastric and duodenal ulcers differ in pain patterns?`,
    a: `Gastric: worse with meals (→ weight loss). Duodenal: better with meals (→ weight gain).` },

  { q: `What is the H. pylori infection rate in gastric vs duodenal ulcers?`,
    a: `Gastric ulcers: ~70%, Duodenal ulcers: ~90%.` },

  { q: `What is the cancer risk difference between gastric and duodenal ulcers?`,
    a: `Gastric ulcers have increased risk of malignancy; duodenal ulcers are generally benign.` },

  { q: `Which arteries are at risk in ulcer hemorrhage?`,
    a: `Lesser curvature: left gastric artery. Posterior duodenum: gastroduodenal artery.` },

  { q: `Which ulcers are more likely to perforate and what sign may be seen?`,
    a: `Anterior duodenal ulcers. Free air under diaphragm with referred shoulder pain.` },

  { q: `What defines upper vs lower GI bleeding?`,
    a: `Upper: proximal to ligament of Treitz (hematemesis/melena). Lower: distal to Treitz (hematochezia).` },

  { q: `How is malabsorption screened?`,
    a: `Sudan stain for fecal fat.` },

  { q: `What is celiac disease and its main features?`,
    a: `Autoimmune reaction to gluten (gliadin), villous atrophy, crypt hyperplasia, and intraepithelial lymphocytosis.` },

  { q: `Which antibodies are elevated in celiac disease?`,
    a: `Anti-tTG, anti-endomysial, anti-deamidated gliadin peptide antibodies (mostly IgA).` },

  { q: `Which genetic markers are associated with celiac disease?`,
    a: `HLA-DQ2 and HLA-DQ8.` },

  { q: `What skin condition is associated with celiac disease?`,
    a: `Dermatitis herpetiformis.` },

  { q: `What is the D-xylose test result in celiac disease?`,
    a: `Abnormal (low absorption of D-xylose).` },

  { q: `What is lactase deficiency and its effects?`,
    a: `Osmotic diarrhea, low stool pH, positive hydrogen breath test. Villi are usually normal.` },

  { q: `What causes pancreatic insufficiency and its effect on digestion?`,
    a: `Causes: CF, chronic pancreatitis, cancer. Leads to poor fat and vitamin absorption (A, D, E, K, B12).` },

  { q: `How is D-xylose test different in pancreatic insufficiency?`,
    a: `Normal (pancreas not required for D-xylose absorption).` },

  { q: `What is tropical sprue and how does it differ from celiac disease?`,
    a: `Like celiac but occurs in tropics, responds to antibiotics, affects jejunum/ileum, causes folate/B12 deficiency.` },

  { q: `What is Whipple disease?`,
    a: `Tropheryma whipplei infection. PAS+ foamy macrophages, CAN symptoms: Cardiac, Arthralgia, Neuro signs.` },

  { q: `What are the hallmark features of Crohn disease?`,
    a: `Skip lesions, transmural inflammation, cobblestone mucosa, creeping fat, fistulas, string sign.` },

  { q: `What are the histologic findings in Crohn disease?`,
    a: `Noncaseating granulomas, lymphoid aggregates.` },

  { q: `What complications are specific to Crohn disease?`,
    a: `Fistulas (enterovesical, perianal), strictures, kidney stones, gallstones.` },

  { q: `What are the hallmark features of ulcerative colitis (UC)?`,
    a: `Continuous lesions starting from rectum, mucosal/submucosal inflammation, lead pipe colon on imaging.` },

  { q: `What are the histologic features of UC?`,
    a: `Crypt abscesses, bleeding, no granulomas.` },

  { q: `What complications are more common in UC?`,
    a: `Fulminant colitis, toxic megacolon, perforation, primary sclerosing cholangitis, colon cancer.` },

  { q: `How does diarrhea differ in Crohn vs UC?`,
    a: `Crohn: may or may not be bloody. UC: usually bloody.` },

  { q: `What antibodies are associated with Crohn and UC?`,
    a: `Crohn: ASCA. UC: p-ANCA (MPO-ANCA).` },

  { q: `What is used to monitor IBD activity?`,
    a: `Fecal calprotectin.` },

  { q: `What is microscopic colitis and how is it diagnosed?`,
    a: `Chronic watery diarrhea in older females. Normal colonoscopy. Histology shows lymphocytic infiltrate.` },

  { q: `What is irritable bowel syndrome (IBS)?`,
    a: `Recurrent abdominal pain with ≥2: related to defecation, stool frequency, or form. No structural abnormalities.` },

  { q: `What is the first-line treatment for IBS?`,
    a: `Lifestyle and dietary modification.` },

  { q: `What causes appendicitis in adults and children?`,
    a: `Adults: fecalith. Children: lymphoid hyperplasia.` },

  { q: `What is the classic pain pattern of appendicitis?`,
    a: `Starts periumbilical → localizes to RLQ (McBurney point). Can cause rebound tenderness, guarding.` },

  { q: `What are diverticula and their types?`,
    a: `Blind pouches protruding from the GI tract. True diverticula include all wall layers (e.g., Meckel); false diverticula only mucosa/submucosa.` },

  { q: `What is diverticulosis?`,
    a: `Multiple false diverticula in the colon, especially sigmoid. Common in older adults, often asymptomatic or with vague discomfort.` },

  { q: `What are complications of diverticulosis?`,
    a: `Diverticular bleeding (painless hematochezia), diverticulitis.` },

  { q: `What is diverticulitis and how does it present?`,
    a: `Inflammation of diverticula. LLQ pain, fever, leukocytosis. May cause abscess, fistula, obstruction, perforation.` },

  { q: `What is Zenker diverticulum?`,
    a: `Pharyngoesophageal false diverticulum due to cricopharyngeal dysfunction. Symptoms: dysphagia, gurgling, aspiration, foul breath.` },

  { q: `What is Meckel diverticulum?`,
    a: `True diverticulum due to persistence of vitelline duct. May have ectopic gastric or pancreatic tissue. Diagnosed with 99mTc-pertechnetate scan.` },

  { q: `What is the rule of 2s in Meckel diverticulum?`,
    a: `2% population, 2 feet from ileocecal valve, 2 inches long, 2 types of epithelium, presents by age 2, 2× more in males.` },

  { q: `What is Hirschsprung disease?`,
    a: `Absence of ganglion cells in distal colon due to failed neural crest migration. Associated with RET mutation and Down syndrome.` },

  { q: `How does Hirschsprung disease present?`,
    a: `Bilious emesis, failure to pass meconium, chronic constipation, squirt sign, empty rectum on digital exam.` },

  { q: `What is malrotation and its consequence?`,
    a: `Abnormal midgut rotation during development. Leads to misplaced bowel and Ladd bands → volvulus or obstruction.` },

  { q: `What is intussusception?`,
    a: `Telescoping of proximal bowel into distal. Causes abdominal pain, vomiting, currant jelly stools, sausage mass. Often idiopathic in kids.` },

  { q: `What causes intussusception in adults?`,
    a: `Intraluminal mass or tumor (lead point).` },

  { q: `What is the “target sign” on ultrasound indicative of?`,
    a: `Intussusception.` },

  { q: `What is volvulus?`,
    a: `Twisting of bowel around its mesentery. May cause obstruction and ischemia. Sigmoid volvulus common in elderly.` },

  { q: `What is short bowel syndrome?`,
    a: `Malabsorption from extensive small bowel resection. Causes diarrhea, weight loss, kidney stones, nutrient deficiencies.` },

  { q: `What is acute mesenteric ischemia?`,
    a: `Embolic occlusion (e.g., SMA) → bowel necrosis. Severe abdominal pain out of proportion to exam.` },

  { q: `What is angiodysplasia?`,
    a: `Tortuous colon vessels, often right-sided. Common in elderly. Presents with hematochezia.` },

  { q: `What is chronic mesenteric ischemia?`,
    a: `Atherosclerosis of celiac/SMA/IMA → postprandial pain (intestinal angina), weight loss.` },

  { q: `What is colonic ischemia and how does it present?`,
    a: `Watershed area ischemia (splenic flexure, rectosigmoid). Crampy pain → hematochezia. Thumbprint sign on imaging.` },

  { q: `What is an ileus?`,
    a: `Intestinal hypomotility without obstruction. Associated with surgery, opioids, sepsis. Distension, constipation, no bowel sounds.` },

  { q: `How is ileus treated?`,
    a: `Bowel rest, correction of electrolytes, cholinergic drugs.` },

  { q: `What is necrotizing enterocolitis?`,
    a: `Seen in premature, formula-fed infants. Necrosis of terminal ileum and colon. Pneumatosis intestinalis on imaging.` },

  { q: `What is proctitis and what causes it?`,
    a: `Inflammation of rectum. Caused by STIs (gonorrhea, HSV, etc), IBD, or radiation. Symptoms: tenesmus, rectal pain.` },

  { q: `What causes small bowel obstruction?`,
    a: `Adhesions (most common), tumors, hernias. Presents with distension, vomiting, air-fluid levels on x-ray.` },

  { q: `What is small intestinal bacterial overgrowth (SIBO)?`,
    a: `Abnormal bacterial load in small intestine. Causes bloating, diarrhea, malabsorption. Diagnosed via breath test.` },

  { q: `What are colonic polyps and how are they classified?`,
    a: `Growths into lumen. Flat, sessile, or pedunculated. Classified as nonneoplastic or neoplastic based on histology.` },

  { q: `What are hamartomatous polyps?`,
    a: `Benign, disorganized normal tissue. Associated with Peutz-Jeghers syndrome and juvenile polyposis.` },

  { q: `What are hyperplastic polyps?`,
    a: `Most common nonneoplastic polyps. Usually rectosigmoid, small and benign.` },

  { q: `What are adenomatous polyps?`,
    a: `Neoplastic polyps with mutations in APC, KRAS. Tubular < villous < tubulovillous for malignant potential.` },

  { q: `What are serrated polyps?`,
    a: `CpG methylation phenotype. Saw-tooth crypts. May progress to CRC via microsatellite instability.` },

  { q: `What is familial adenomatous polyposis (FAP)?`,
    a: `AD mutation in APC gene (5q). Thousands of polyps after puberty. 100% progress to cancer. Needs colectomy.` },

  { q: `What is Gardner syndrome?`,
    a: `FAP + osteomas, soft tissue tumors, retinal pigment hypertrophy, supernumerary teeth.` },

  { q: `What is Turcot syndrome?`,
    a: `FAP or Lynch + CNS tumor (medulloblastoma, glioma). "Turcot = Turban."` },

  { q: `What is Peutz-Jeghers syndrome?`,
    a: `AD hamartomatous polyps throughout GI + mucocutaneous pigmentation. ↑ risk of GI and breast cancers.` },

  { q: `What is juvenile polyposis syndrome?`,
    a: `AD syndrome in kids < 5 yrs. Multiple hamartomatous polyps in colon, small bowel. ↑ CRC risk.` },

  { q: `What is MUTYH-associated polyposis?`,
    a: `AR DNA repair gene mutation. Multiple adenomatous and serrated polyps. Associated with CRC and duodenal polyps.` },

  { q: `What is Lynch syndrome?`,
    a: `HNPCC. AD mutation in mismatch repair genes (MLH1, MSH2). Leads to microsatellite instability. ↑ risk for colon, endometrial, ovarian, skin cancers.` },

  { q: `What are risk factors for colorectal cancer?`,
    a: `Polyps (adenomatous, serrated), family history, IBD, smoking, diet (low fiber, high red meat).` },

  { q: `What is the typical location of colorectal cancer?`,
    a: `Rectosigmoid > ascending > descending colon.` },

  { q: `How do right vs left colon cancers present?`,
    a: `Right: occult bleeding, anemia, weight loss. Left: obstruction, hematochezia, narrow stools.` },

  { q: `What infection is associated with CRC?`,
    a: `Streptococcus gallolyticus (S. bovis) endocarditis or bacteremia.` },

  { q: `When should CRC screening begin for average-risk adults?`,
    a: `Age 45 (colonoscopy preferred).` },

  { q: `When should CRC screening begin with a 1° relative with CRC?`,
    a: `Age 40 or 10 years before relative's diagnosis.` },

  { q: `What is the adenoma-carcinoma sequence in CRC?`,
    a: `APC loss → KRAS mutation → p53 loss. Typical in left-sided cancers.` },

  { q: `What is the serrated pathway in CRC?`,
    a: `BRAF mutation + DNA mismatch repair gene silencing (MLH1). Microsatellite instability. Right-sided cancers.` },

  { q: `What is the role of COX-2 in CRC?`,
    a: `Overexpressed in CRC; NSAIDs may be chemopreventive.` },

  { q: `What is cirrhosis and its histologic hallmark?`,
    a: `Bridging fibrosis and regenerative nodules disrupting liver architecture.` },

  { q: `What are the main causes of cirrhosis?`,
    a: `Alcohol, NASH, chronic viral hepatitis, autoimmune hepatitis, biliary disease, genetic conditions.` },

  { q: `What is portal hypertension and how is it diagnosed?`,
    a: `↑ portal vein pressure, often from cirrhosis. SAAG ≥ 1.1 indicates portal hypertension.` },

  { q: `What are signs of portal hypertension?`,
    a: `Ascites, caput medusae, varices (esophageal, anorectal), splenomegaly, encephalopathy.` },

  { q: `What is Budd-Chiari syndrome?`,
    a: `Hepatic venous outflow obstruction → liver congestion. Presents with hepatomegaly, ascites, pain, no JVD.` },

  { q: `What causes Budd-Chiari syndrome?`,
    a: `Hypercoagulable states, polycythemia vera, postpartum, hepatocellular carcinoma.` },

  { q: `What is portal vein thrombosis?`,
    a: `Clot in portal vein before liver. Causes portal hypertension without hepatomegaly. May cause bowel ischemia.` },

  { q: `What is spontaneous bacterial peritonitis (SBP)?`,
    a: `Infection of ascitic fluid in cirrhotics. Often asymptomatic or with fever, pain, encephalopathy.` },

  { q: `How is SBP diagnosed and treated?`,
    a: `Neutrophil count > 250 in ascitic fluid. Treat with ceftriaxone (3rd gen cephalosporin).` },

  { q: `What is the AST:ALT ratio in alcoholic liver disease?`,
    a: `AST > ALT, usually >2:1. AST rarely > 500 U/L.` },

  { q: `What liver marker is elevated in cholestasis?`,
    a: `Alkaline phosphatase (ALP), and γ-glutamyl transpeptidase (GGT).` },

  { q: `What does low albumin or high PT indicate in liver disease?`,
    a: `Poor synthetic function of liver.` },

  { q: `What is Reye syndrome?`,
    a: `Hepatic encephalopathy in kids after viral infection + aspirin. Mitochondrial dysfunction → fatty liver, coma, ↑ ICP.` },

  { q: `What are features of hepatic steatosis?`,
    a: `Reversible macrovesicular fatty change in liver due to alcohol use. Improves with cessation.` },

  { q: `What is alcoholic hepatitis and its histology?`,
    a: `Long-term alcohol use. Swollen hepatocytes, neutrophilic infiltrates, and Mallory bodies.` },

  { q: `What is alcoholic cirrhosis and how does it appear histologically?`,
    a: `Irreversible scarring with regenerative nodules surrounded by fibrous bands → portal hypertension.` },

  { q: `What is NAFLD?`,
    a: `Nonalcoholic fatty liver disease. Associated with metabolic syndrome. Fat accumulation in hepatocytes without alcohol use.` },

  { q: `What is NASH?`,
    a: `Nonalcoholic steatohepatitis. Includes inflammation and hepatocyte ballooning → fibrosis → cirrhosis or HCC.` },

  { q: `What antibodies are seen in autoimmune hepatitis?`,
    a: `Anti-smooth muscle antibody or anti-LKM-1. ALT/AST elevated. Lymphoplasmacytic infiltrates.` },

  { q: `What is hepatic encephalopathy?`,
    a: `Accumulation of NH3 due to cirrhosis → confusion, asterixis, coma. Triggered by GI bleed, renal failure, infection.` },

  { q: `How is hepatic encephalopathy treated?`,
    a: `Lactulose (↑ NH4+ generation), rifaximin (↓ ammonia-producing bacteria).` },

  { q: `What is hepatic hemangioma?`,
    a: `Most common benign liver tumor. Cavernous vascular lesion. Biopsy contraindicated due to hemorrhage risk.` },

  { q: `What is focal nodular hyperplasia?`,
    a: `Benign hepatic mass with central scar, often in women. Asymptomatic, incidental finding.` },

  { q: `What is a hepatic adenoma?`,
    a: `Rare benign liver tumor. Linked to OCP or steroid use. Risk of rupture or regression.` },

  { q: `What is HCC (hepatocellular carcinoma)?`,
    a: `Most common primary malignant liver tumor. Associated with HBV, HCV, alcohol, NASH, aflatoxins.` },

  { q: `What are signs of HCC?`,
    a: `Jaundice, tender hepatomegaly, weight loss, ascites, increased AFP. May cause portal vein thrombosis.` },

  { q: `What is hepatic angiosarcoma?`,
    a: `Rare malignant endothelial liver tumor. Linked to vinyl chloride and arsenic exposure.` },

  { q: `What are the most common malignant liver tumors overall?`,
    a: `Metastases from GI, breast, or lung cancer. Usually multiple lesions.` },

  { q: `What is alpha-1 antitrypsin deficiency?`,
    a: `Misfolded protein accumulates in liver (PAS+ globules) → cirrhosis. Also causes panacinar emphysema in lungs.` },

  { q: `What causes jaundice?`,
    a: `↑ bilirubin (unconjugated or conjugated) due to hemolysis, liver dysfunction, or bile obstruction.` },

  { q: `What is conjugated hyperbilirubinemia?`,
    a: `Due to bile duct obstruction, Dubin-Johnson syndrome, Rotor syndrome.` },

  { q: `What is unconjugated hyperbilirubinemia?`,
    a: `Due to hemolysis, Crigler-Najjar, Gilbert syndrome, or newborn liver immaturity.` },

  { q: `What is mixed hyperbilirubinemia?`,
    a: `Caused by hepatitis or cirrhosis. Includes both direct and indirect bilirubin elevation.` },

  { q: `What is physiologic neonatal jaundice?`,
    a: `Normal newborns have immature UGT enzyme → ↑ unconjugated bilirubin. Resolves in 1–2 weeks.` },

  { q: `What is breastfeeding failure jaundice?`,
    a: `Insufficient intake → ↓ bilirubin elimination → ↑ enterohepatic circulation.` },

  { q: `What is breast milk jaundice?`,
    a: `Due to β-glucuronidase in milk → ↑ deconjugation of bilirubin in gut → ↑ reabsorption.` },

  { q: `What is the treatment for severe neonatal jaundice?`,
    a: `Phototherapy to isomerize unconjugated bilirubin into water-soluble form.` },

  { q: `What is biliary atresia?`,
    a: `Destruction of bile ducts in newborns. Persistent jaundice, dark urine, acholic stools. ↑ direct bilirubin and GGT.` },

  { q: `What is Gilbert syndrome?`,
    a: `Mild ↓ in UGT activity → mild unconjugated hyperbilirubinemia with stress or fasting. Benign.` },

  { q: `What is Crigler-Najjar syndrome type I?`,
    a: `Absent UGT enzyme → severe unconjugated hyperbilirubinemia. Risk of kernicterus. Fatal without liver transplant.` },

  { q: `How is Crigler-Najjar type I treated?`,
    a: `Phototherapy, plasmapheresis. Liver transplant is curative.` },

  { q: `What is Crigler-Najjar type II?`,
    a: `Less severe form. Responds to phenobarbital (↑ UGT production).` },

  { q: `What is Dubin-Johnson syndrome?`,
    a: `Defective liver excretion of conjugated bilirubin. Causes black liver. Benign.` },

  { q: `What is Rotor syndrome?`,
    a: `Similar to Dubin-Johnson, but liver is not pigmented. Defect in hepatic storage.` },

  { q: `What is Wilson disease?`,
    a: `AR mutation in ATP7B → ↓ ceruloplasmin → copper buildup in liver, brain, eyes, kidneys.` },

  { q: `What are signs of Wilson disease?`,
    a: `Liver disease, neurologic symptoms (tremor, dystonia), psychiatric issues, Kayser-Fleischer rings.` },

  { q: `How is Wilson disease diagnosed and treated?`,
    a: `↓ ceruloplasmin, ↑ urinary copper. Treat with penicillamine, trientine, or zinc.` },

  { q: `What is hemochromatosis?`,
    a: `AR mutation in HFE gene → ↑ intestinal iron absorption → organ damage. Presents after age 40.` },

  { q: `What is the classic triad of hemochromatosis?`,
    a: `Cirrhosis, diabetes mellitus, skin pigmentation ("bronze diabetes").` },

  { q: `How is iron visualized in liver biopsy?`,
    a: `Prussian blue stain shows hemosiderin.` },

  { q: `How is hemochromatosis treated?`,
    a: `Phlebotomy or iron chelators like deferoxamine or deferasirox.` },

  { q: `What are the 3 main types of cholestatic liver diseases?`,
    a: `Primary sclerosing cholangitis, primary biliary cholangitis, secondary biliary cirrhosis.` },

  { q: `What is primary sclerosing cholangitis (PSC)?`,
    a: `Inflammation and fibrosis of bile ducts. Associated with UC and p-ANCA positivity.` },

  { q: `How is PSC diagnosed?`,
    a: `MRCP or ERCP shows "beading" of bile ducts. ↑ risk of cholangiocarcinoma.` },

  { q: `What is primary biliary cholangitis (PBC)?`,
    a: `Autoimmune destruction of intrahepatic bile ducts. Middle-aged females. Anti-mitochondrial Ab.` },

  { q: `What is secondary biliary cirrhosis?`,
    a: `Due to extrahepatic bile obstruction (gallstones, cancer, strictures). Leads to liver damage.` },

  { q: `What are the main types of gallstones?`,
    a: `Cholesterol stones (radiolucent), black pigment (Ca-bilirubinate, hemolysis), brown (infection-related).` },

  { q: `What are risk factors for cholesterol stones?`,
    a: `Obesity, estrogen, rapid weight loss, Native American ancestry, Crohn disease.` },

  { q: `How is gallstone disease diagnosed and treated?`,
    a: `Ultrasound. If symptomatic, treat with elective cholecystectomy.` },

  { q: `What is biliary colic?`,
    a: `RUQ pain after fatty meals due to gallbladder contraction against a stone in cystic duct.` },

  { q: `What is choledocholithiasis?`,
    a: `Gallstone in the common bile duct → elevated ALP, GGT, direct bilirubin, ± AST/ALT.` },

  { q: `What is cholecystitis?`,
    a: `Inflammation of the gallbladder. Usually due to cystic duct obstruction. Murphy sign positive.` },

  { q: `What is acalculous cholecystitis?`,
    a: `Gallbladder inflammation without stones. Seen in critically ill patients (sepsis, trauma). Caused by ischemia or infection (e.g., CMV).` },

  { q: `What is Murphy's sign and what does it indicate?`,
    a: `Inspiratory arrest during RUQ palpation due to pain. Suggests cholecystitis.` },

  { q: `What is gallstone ileus?`,
    a: `Fistula between gallbladder and GI tract allows stone to obstruct ileocecal valve. Can cause air in biliary tree (pneumobilia).` },

  { q: `What is porcelain gallbladder and why is it significant?`,
    a: `Calcified gallbladder wall. Often incidental. Increased risk of gallbladder adenocarcinoma.` },

  { q: `What is Charcot's triad of acute cholangitis?`,
    a: `RUQ pain, jaundice, fever. Suggests ascending cholangitis due to biliary obstruction and infection.` },

  { q: `What is Reynold’s pentad in acute cholangitis?`,
    a: `Charcot’s triad + hypotension + altered mental status. Suggests sepsis.` },

  { q: `What is cholangiocarcinoma?`,
    a: `Malignant bile duct tumor. Risk factors: PSC, liver flukes. Presents late with jaundice, weight loss.` },

  { q: `What is acute pancreatitis and its causes?`,
    a: `Autodigestion of pancreas. Causes: I GET SMASHED (Idiopathic, Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion sting, Hypercalcemia/hypertriglyceridemia, ERCP, Drugs).` },

  { q: `How is acute pancreatitis diagnosed?`,
    a: `Requires 2 of 3: epigastric pain radiating to back, elevated amylase/lipase (3×), imaging findings.` },

  { q: `What are complications of acute pancreatitis?`,
    a: `Pseudocyst, abscess, necrosis, hemorrhage, ARDS, renal failure, hypocalcemia.` },

  { q: `What is a pancreatic pseudocyst?`,
    a: `Fluid collection lined by granulation tissue (not epithelium). Common complication of acute pancreatitis.` },

  { q: `What is chronic pancreatitis?`,
    a: `Chronic inflammation and fibrosis of pancreas. Common causes: alcohol use, CF, SPINK1 mutations.` },

  { q: `What are signs of chronic pancreatitis?`,
    a: `Steatorrhea, diabetes mellitus, pancreatic calcifications, fat-soluble vitamin deficiency.` },

  { q: `How is chronic pancreatitis different from acute?`,
    a: `Enzymes (amylase/lipase) may not be elevated in chronic; pancreatic insufficiency present.` },

  { q: `What are causes of pancreatic insufficiency?`,
    a: `Chronic pancreatitis, cystic fibrosis, surgical resection. Causes steatorrhea and malabsorption.` },

  { q: `What is pancreatic cancer and its most common type?`,
    a: `Adenocarcinoma, usually in pancreatic head. Very aggressive with poor prognosis.` },

  { q: `What are symptoms of pancreatic cancer?`,
    a: `Abdominal pain radiating to back, weight loss, jaundice, migratory thrombophlebitis (Trousseau syndrome), Courvoisier sign.` },

  { q: `What is Courvoisier sign?`,
    a: `Enlarged, nontender gallbladder with painless jaundice. Suggests pancreatic head cancer obstructing bile duct.` },

  { q: `What is Trousseau syndrome?`,
    a: `Migratory thrombophlebitis (recurrent clots in different veins). Paraneoplastic sign of pancreatic cancer.` },

  { q: `What tumor markers are used in pancreatic cancer?`,
    a: `CA 19-9 (most common), CEA (nonspecific).` },

  { q: `What is the Whipple procedure?`,
    a: `Pancreaticoduodenectomy. Used to treat pancreatic head cancer.` },

  { q: `What is a gastrinoma?`,
    a: `Gastrin-secreting tumor (Zollinger-Ellison syndrome). Causes recurrent ulcers and diarrhea.` },

  { q: `Where are gastrinomas usually located?`,
    a: `Pancreas or duodenum. May be part of MEN1.` },

  { q: `What is a VIPoma?`,
    a: `Rare pancreatic tumor secreting VIP → watery diarrhea, hypokalemia, achlorhydria (WDHA syndrome).` },

  { q: `What are insulinomas and their presentation?`,
    a: `Pancreatic β-cell tumors. Cause hypoglycemia with high insulin and C-peptide levels.` },

  { q: `What are glucagonomas and their features?`,
    a: `α-cell tumors. Cause diabetes, necrolytic migratory erythema, weight loss.` },

  { q: `What is somatostatinoma?`,
    a: `δ-cell tumor. Causes diabetes, gallstones, steatorrhea, achlorhydria by inhibiting insulin, CCK, and gastrin.` },

  { q: `Which MEN syndrome is associated with pancreatic tumors?`,
    a: `MEN1: pituitary, parathyroid, and pancreatic endocrine tumors.` },

  { q: `What is the role of octreotide in GI tumors?`,
    a: `Somatostatin analog. Used for carcinoid syndrome, VIPoma, glucagonoma, and bleeding varices.` },

  { q: `What is carcinoid syndrome?`,
    a: `Serotonin-secreting tumor (often in small bowel). Symptoms: flushing, diarrhea, bronchospasm, right heart fibrosis.` }
];