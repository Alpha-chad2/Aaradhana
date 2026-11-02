const prayers = [
  {
    id: "khandoba", category: "आरती", title: "श्री खंडेरायाची आरती", subtitle: "मल्हारी मार्तंडाची आरती", source: "assets/images/khandoba-aarti.jpeg",
    verses: [
      "पंचानन हयवाहन सुरभूषितनीळा ।\nखंडामंडित दंडित दानव अवलीळा ॥\nमणिमल्ल मर्दुनियां जो धुसुर पिवळा ।\nहिरे कंकण बासिंगे सुमनांच्या माळा ॥ १ ॥",
      "जय देव जय देव जय शिव मल्हारी ।\nवारी दुर्जनासुरा भवदुस्तर तारी ॥ धृ. ॥",
      "सुरवरसंवर वर दे मजलागी देवा ।\nनाना नामे गाईन ही तुमची सेवा ॥\nअघटित गुण गावया वाटतसे हेवा ।\nफणिवर शिणला किती नर पामर केवा ॥ २ ॥",
      "रघुवीरस्मरणी शंकर हृदयी निवाला ।\nतो हा मल्हारीतंक अवतार झाला ॥\nयालागीं आवडे भाव वर्णीला ।\nरामि रामदासा जिवलग भेटला ॥ जय देव ॥ ३ ॥"
    ]
  },
  {
    id: "durga", category: "आरती", title: "श्री दुर्गादेवीची आरती", subtitle: "दुर्गे दुर्घट भारी", source: "assets/images/durga-aarti.jpeg",
    verses: [
      "दुर्गे दुर्घट भारी तुजविण संसारी ।\nअनाथनाथे अंबे करुणा विस्तारी ॥\nवारी वारी जन्ममरणाते वारी ।\nहारी पडलो आता संकट निवारी ॥ १ ॥",
      "जय देवी जय देवी जय महिषासुरमथनी ।\nसुरवरईश्वरवरदे तारक संजीवनी ॥ धृ. ॥",
      "त्रिभुवनी भुवनी पाहता तुज से नाही ।\nचारी श्रमले परंतु न बोलवे काही ॥\nसाही विवाद करिता पडिले प्रवाही ।\nते तूं भक्तालागी पावसि लवलाही ॥ २ ॥",
      "प्रसन्न वदने प्रसन्न होसी निजदासां ।\nक्लेशापासुनी सोडी तोडी भवपाशा ॥\nअंबे तुजवांचून कोण पुरविल आशा ।\nनरहरी तल्लीन झाला पदपंकजलेशा ॥ ३ ॥"
    ]
  },
  {
    id: "mahalaxmi", category: "आरती", title: "श्री महालक्ष्मीची आरती", subtitle: "जय देवी जय देवी जय महालक्ष्मी", source: "assets/images/mahalaxmi-aarti.jpeg",
    verses: [
      "जय देवी जय देवी जय महालक्ष्मी ।\nवससी व्यापक रूपे तू स्थूलसूक्ष्मी ॥ धृ. ॥",
      "करवीरपुरवासिनी सुरवरमुनिमाता ।\nपुरवरदायक भवभयहारिणी माता ॥\nकमलाकारें जठरी जन्मविला धाता ।\nसहस्रवदनी भूधर न पुरे गुणगाता ॥ जय ॥",
      "मातुलिंग धर खेटक रविकिरणी ।\nझळके हाटकवाटी पीयूषरसपाणी ॥\nमाणिक रसना सुरंग बसना मृगनयनी ।\nशशिकर वदना राजस मदनाची जननी ॥ जय ॥",
      "तारा शक्ती अगम्या शिवभजका भारी ।\nसंकट सागरी पावुनी नेसी तारी ॥\nगायत्री निजबीज निगमागम सारी ।\nप्रगटे पद्मावती निजधर्माचारी ॥ जय ॥",
      "अमृत भरिते सरिते अघदुरिते वारी ।\nमारी दुर्गट असुरा भवदुस्तर तारी ॥\nवारी माया पटल प्रणमत परिवारी ।\nहे रूप चिद्रूप दावी निर्धारी ॥ जय ॥",
      "चतुरानने कुष्टिक कर्माच्या ओळी ।\nलिहिल्या असतील माते माझे निजभाळी ।\nपुसोनी चरणतळी पदसुमने वागळी ।\nमुक्तेश्वर नागर क्षीरसागर बाळी ॥ जय ॥"
    ]
  },
  {
    id: "mahadev", category: "आरती", title: "श्री महादेवाची आरती", subtitle: "लवथवती विक्राळा ब्रह्मांडी माळा", source: "assets/images/mahadev-aarti.jpeg",
    verses: [
      "लवथवती विक्राळा ब्रह्मांडी माळा ।\nवीषे कंठ काळा त्रिनेत्री ज्वाळा ॥\nलावण्यसुंदर मस्तकी बाळा ।\nतेथुनियां जल निर्मळ वाहे झुळझुळा ॥ १ ॥",
      "जय देव जय देव जय श्रीशंकरा ।\nआरती ओवाळू तुज कर्पूरगौरा ॥ धृ. ॥",
      "कर्पूरगौर भोळा नयनी विशाल ।\nअर्धांगी पार्वती सुमनांच्या माळा ॥\nविभूतीचे उधळण शितिकंठ नीळा ।\nऐसा शंकर शोभे उमा वेल्हाळा ॥ जय देव ॥ २ ॥",
      "देवीं दैत्य सागरमंथन पै केले ।\nत्यामाजी जे अवचित हळाहळ उठिले ॥\nते त्वां असुरपणे प्राशन केले ।\nनीलकंठ नाम प्रसिद्ध झाले ॥ जय देव ॥ ३ ॥",
      "व्याघ्रांबर फणिवरधर सुंदर मदनारी ।\nपंचानन मनमोहन मुनिजनसुखकारी ॥\nशतकोटीचे बीज वाचे उच्चारी ।\nरघुकुळटिळक रामदासा अंतरी ॥ जय देव ॥ ४ ॥"
    ]
  },
  {
    id: "datta", category: "आरती", title: "दत्ताची आरती", subtitle: "त्रिगुणात्मक त्रैमूर्ती दत्त हा जाणा", source: "assets/images/datta-aarti.jpeg",
    verses: [
      "त्रिगुणात्मक त्रैमूर्ती दत्त हा जाणा ।\nत्रिगुणी अवतार त्रैलोक्य राणा ।\nनेती नेती शब्द न ये अनुमाना ।\nसुरवर मुनिजन योगी समाधी न ये ध्याना ॥ १ ॥",
      "जय देव जय देव जय श्री गुरुदत्ता ।\nआरती ओवाळिता हरली भवचिंता ॥ धृ. ॥",
      "सबाह्य अभ्यंतरी तू एक दत्त ।\nअभाग्यासी कैची कळेल ही मात ॥\nपराही परतली तेथे कैचा हेत ।\nजन्ममरणाचाही पुरलासे अंत ॥ २ ॥",
      "दत्त येऊनिया उभा ठाकला ।\nभावे साष्टांगे प्रणिपात केला ।\nप्रसन्न होऊनी आशीर्वाद दिधला ।\nजन्ममरणाचा फेरा चुकविला ॥ ३ ॥",
      "दत्त दत्त ऐसे लागले ध्यान ।\nहरपले मन झाले उन्मन ।\nमी तू पणाची झाली बोळवण ।\nएका जनार्दनी श्रीदत्तध्यान ॥ ४ ॥"
    ]
  },
  {
    id: "ganapati", category: "श्लोक", title: "गणपती अथर्वशीर्ष", subtitle: "ॐ नमस्ते गणपतये", source: "assets/images/ganapati-atharvashirsha.jpeg", layout: "shloka-layout",
    verses: [
      "ॐ नमस्ते गणपतये ।\nत्वमेव प्रत्यक्षं तत्त्वमसि ।\nत्वमेव केवलं कर्ताऽसि ।\nत्वमेव केवलं धर्ताऽसि ।\nत्वमेव केवलं हर्ताऽसि ।\nत्वमेव सर्वं खल्विदं ब्रह्मासि ।\nत्वं साक्षादात्माऽसि नित्यम् ॥ १ ॥",
      "ऋतं वच्मि । सत्यं वच्मि ॥ २ ॥\nअव त्वं माम् । अव वक्तारम् ।\nअव श्रोतारम् । अव दातारम् ।\nअव धातारम् । अवानूचानमव शिष्यम् ।\nअव पश्चात्तात् । अव पुरस्तात् ।\nअवोत्तरात्तात् । अव दक्षिणात्तात् ।\nअव चोर्ध्वात्तात् । अवाधरात्तात् ।\nसर्वतो मां पाहि-पाहि समन्तात् ॥ ३ ॥",
      "त्वं वाङ्मयस्त्वं चिन्मयः ।\nत्वमानन्दमयस्त्वं ब्रह्ममयः ।\nत्वं सच्चिदानन्दाद्वितीयोऽसि ।\nत्वं प्रत्यक्षं ब्रह्मासि ।\nत्वं ज्ञानमयो विज्ञानमयोऽसि ॥ ४ ॥",
      "सर्वं जगदिदं त्वत्तो जायते ।\nसर्वं जगदिदं त्वत्तस्तिष्ठति ।\nसर्वं जगदिदं त्वयि लयमेष्यति ।\nसर्वं जगदिदं त्वयि प्रत्येति ।\nत्वं भूमिरापोऽनलोऽनिलो नभः ।\nत्वं चत्वारि वाक्पदानि ॥ ५ ॥",
      "त्वं गुणत्रयातीतः । त्वमवस्थात्रयातीतः ।\nत्वं देहत्रयातीतः । त्वं कालत्रयातीतः ।\nत्वं मूलाधारस्थितोऽसि नित्यम् ।\nत्वं शक्तित्रयात्मकः ॥",
      "त्वां योगिनो ध्यायन्ति नित्यम् ।\nत्वं ब्रह्मा त्वं विष्णुस्त्वं रुद्रस्त्वमिन्द्रस्त्वमग्निस्त्वं वायुः ।\nत्वं सूर्यस्त्वं चन्द्रमास्त्वं ब्रह्म भूर्भुवः स्वरोम् ॥ ६ ॥",
      "गणादिं पूर्वमुच्चार्य वर्णादिं तदनन्तरम् ।\nअनुस्वारः परतरः । अर्धेन्दुलसितम् ।\nतारेण ऋद्धम् । एतत्तव मनुस्वरूपम् ॥\nगकारः पूर्वरूपम् अकारो मध्यमरूपम् ।\nअनुस्वारश्चान्त्यरूपम् बिन्दुरुत्तररूपम् ।\nनादः संधानम् संहिता सन्धिः ।\nसैषा गणेशविद्या । गणक ऋषिः । निचृद्गायत्री छन्दः । गणपतिर्देवता ।\nॐ गं गणपतये नमः ॥ ७ ॥",
      "एकदन्ताय विद्महे ।\nवक्रतुण्डाय धीमहि ।\nतन्नो दन्तिः प्रचोदयात् ॥ ८ ॥",
      "एकदन्तं चतुर्हस्तं पाशमङ्कुशधारिणम् ।\nरदं च वरदं हस्तैर्बिभ्राणं मूषकध्वजम् ।\nरक्तं लम्बोदरं शूर्पकर्णकं रक्तवाससम् ।\nरक्तगन्धानुलिप्ताङ्गं रक्तपुष्पैः सुपूजितम् ।\nभक्तानुकम्पिनं देवं जगत्कारणमच्युतम् ।\nआविर्भूतं च सृष्ट्यादौ प्रकृतेः पुरुषात्परम् ।\nएवं ध्यायति यो नित्यं स योगी योगिनां वरः ॥ ९ ॥",
      "नमो व्रातपतये नमो गणपतये नमः प्रमथपतये ।\nनमस्तेऽस्तु लम्बोदरायैकदन्ताय विघ्ननाशिने शिवसुताय ।\nश्रीवरदमूर्तये नमो नमः ॥ १० ॥"
    ]
  },
  {
    id: "ambe", category: "आरती", title: "अंबे एक करी", subtitle: "भक्तास हाती धरी", source: "assets/images/ambe-ek-kari.jpeg",
    verses: [
      "अंबे एक करी, उदास न करी, भक्तास हाती धरी ।\nविघ्ने दूर करी, स्वधर्म-उद्धरी, दारिद्र्य माझे हरी ।\nचिंती मूर्ती वरी, वरदाभय करी, ध्यातो तुला अंतरी ।\nवाचा शुद्ध करी, विलंब न करी पावे त्वरे सुंदरी ॥ १ ॥",
      "माते एकविरे, वरदाभयकरे, दे तू दयासागरे ।\nमाझा हेतु पुरे, मनात न उरे, संदेह माझा हरे ।\nजेणे पाप सरे, कुबुद्धी विसरे, ब्रह्मैक्य-धी सवरे ।\nदेई पूर्ण करे भवाब्धी तरे ऐसे करावे त्वरे ॥ २ ॥",
      "अनाथासी अंबे नको विसरू वो ।\nभवसंसारी सांग कैसा तरू वो ।\nअन्यायी मी हे तुझे लेकरू वो ।\nनको रेणुके दैन्य माझे करू वो ॥ ३ ॥",
      "मुक्ताफळें कुंकुमपाटलांगी ।\nसंदेह तारानिके रविभाती ।\nश्री मूलपीठांचलचंडिकाया ।\nतामेकवीरां शरणं प्रपद्ये ॥ ४ ॥",
      "सखे दुःखिताला नको दुःखवू वो ।\nदिना बालकाला नको मुकलू वो ।\nब्रीदा रक्षी तू आपुल्या श्री भवानी ।\nहि प्रार्थना ऐकुनी कैवल्यदानी ॥ ५ ॥",
      "माते तुझे ध्यान आम्हांसी राहो ।\nतुझे नाम आमच्या मुखास येवो ।\nमाते तुझे आम्ही दासानुदास ।\nनमस्कार माते तुझ्या चरणास ॥"
    ]
  },
  {
    id: "soniya", category: "आरती", title: "सोनियाच्या पावलाने", subtitle: "महालक्ष्मी आली ओवाळिती", source: "assets/images/soniyachya-pavlani.jpeg",
    verses: [
      "कुंकवाने घातला सडा । मुखी तांबूल विडा हाती ।\nशोभे हिरवा चुडा । दिवा प्रसादाचा पेटी ॥ धृ. १ ॥\nसोनियाच्या पावलाने । महालक्ष्मी आली ओवाळिती ।\nकापूराने भक्त प्रसन्न झाली ॥",
      "नेत्रांच्या लावल्या वाती । पंच प्राणाच्या ज्योती आरती ।\nभक्त गाती । तेथे नांदिण्याच्या ज्योती ॥ धृ. २ ॥\nसोनियाच्या पावलाने । महालक्ष्मी आली ओवाळिती ।\nकापूराने भक्त प्रसन्न झाली ॥",
      "भावभक्तीच्या केल्या माळा । घातल्या महालक्ष्मीच्या गळा ।\nपायी वाजे पैंजणमाळा । केला नर सोहळा ॥ धृ. ३ ॥\nसोनियाच्या पावलाने । महालक्ष्मी आली ओवाळिती ।\nकापूराने भक्त प्रसन्न झाली ॥",
      "रेणुकेची भरली ओटी । लावली चंदन उटी किती ।\nतिची जागोजागी । झाली दर्शना दाटी ॥ धृ. ४ ॥\nसोनियाच्या पावलाने । महालक्ष्मी आली ओवाळिती ।\nकापूराने भक्त प्रसन्न झाली ॥"
    ]
  },
  {
    id: "ghalin", category: "स्तोत्र", title: "घालीन लोटांगण", subtitle: "नमन आणि नामस्मरण", source: "assets/docs/ghalin-lotangan.pdf", sourceType: "pdf",
    verses: [
      "घालीन लोटांगण, वंदीन चरण,\nडोळ्यांनी पाहीन रूप तुझे ॥\nप्रेमे आलिंगिन, आनंदे पूजिन,\nभावे ओवाळीन म्हणे नामा ॥ १ ॥",
      "त्वमेव माता च पिता त्वमेव,\nत्वमेव बन्धुश्च सखा त्वमेव ।\nत्वमेव विद्या द्रविणं त्वमेव,\nत्वमेव सर्वं मम देवदेव ॥ २ ॥",
      "कायेन वाचा मनसेंद्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतिस्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै,\nनारायणायेति समर्पयामि ॥ ३ ॥",
      "अच्युतं केशवं रामनारायणं,\nकृष्णदामोदरं वासुदेवं हरिम् ।\nश्रीधरं माधवं गोपिकावल्लभं,\nजानकीनायकं रामचंद्रं भजे ॥ ४ ॥",
      "हरे राम हरे राम राम राम हरे हरे ।\nहरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।\n(इति त्रिवार)"
    ]
  },
  {
    id: "vyankatesh",
    category: "आरती",
    title: "श्री व्यंकटेश आरती",
    subtitle: "शेषाचल अवतार तारक तूं देवा",
    source: `श्री व्यंकटेश आरती

शेषाचल अवतार तारक तूं देवा ।
सुरवर मुनिवर भावें करिती जन सेवा ॥
कमलारमणा अससी अगणित गुण ठेवा ।
कमलाक्षा मज रक्षुनि सत्वर वर द्यावा ॥ १ ॥

जय देव जय देव जय व्यंकटेशा ।
केवळ करूणासिंधु पुरविसी आशा ॥ धृ. ॥

हे निजवैकुंठ म्हणुनी ध्यातों मी तू तें ।
दाखविसी गुण कैसे सकळिक लोकाते ॥
देखुनि तुझे स्वरूप सुख अद्भुत होते ।
ध्यातां तुजला श्रीपति दृढ मानस होते ॥ २ ॥`,
    sourceType: "text",
    sourceFile: "assets/docs/vyankatesh-aarti.txt",
    verses: [
      "शेषाचल अवतार तारक तूं देवा ।\nसुरवर मुनिवर भावें करिती जन सेवा ॥\nकमलारमणा अससी अगणित गुण ठेवा ।\nकमलाक्षा मज रक्षुनि सत्वर वर द्यावा ॥ १ ॥",
      "जय देव जय देव जय व्यंकटेशा ।\nकेवळ करूणासिंधु पुरविसी आशा ॥ धृ. ॥",
      "हे निजवैकुंठ म्हणुनी ध्यातों मी तू तें ।\nदाखविसी गुण कैसे सकळिक लोकाते ॥\nदेखुनि तुझे स्वरूप सुख अद्भुत होते ।\nध्यातां तुजला श्रीपति दृढ मानस होते ॥ २ ॥"
    ]
  },
  {
    id: "maruti",
    category: "आरती",
    title: "श्री मारुती आरती",
    subtitle: "सत्राणें उड्डाणें हुंकार वदनी (मारुती आरती संग्रह)",
    source: `मारुती आरती संग्रह
सत्राणें उड्डाणें हुंकार वदनी ।।
करि डळमळ भूमंडळ सिंधुजळ गगनी ।।
गडबडिलें ब्रम्हांड धाके त्रिभुनवी ।।
सुरवर नर निशाचर त्या झाल्या पळणी ।। १ ।।
जय देव जय देव जय हनुमंता ।।
तुमचेनी प्रसादें न भी कृतांता ।। जय।। धृ ।।
दुमदुमली पाताळें उठिला प्रतिशब्द ।।
थरथरिला धरणीधर मानीला खेद ।।
कडकडिले पर्वत उडुगणउच्छेद ।।
रामी रामदासा शक्तपचा शोध ।।
जय देव जय देव जय हनुमंता ।। २ ।।`,
    sourceType: "text",
    sourceFile: "assets/docs/maruti-aarti.txt",
    verses: [
      "सत्राणें उड्डाणें हुंकार वदनी ।।\nकरि डळमळ भूमंडळ सिंधुजळ गगनी ।।\nगडबडिलें ब्रम्हांड धाके त्रिभुनवी ।।\nसुरवर नर निशाचर त्या झाल्या पळणी ।। १ ।।",
      "जय देव जय देव जय हनुमंता ।।\nतुमचेनी प्रसादें न भी कृतांता ।। जय।। धृ ।।",
      "दुमदुमली पाताळें उठिला प्रतिशब्द ।।\nथरथरिला धरणीधर मानीला खेद ।।\nकडकडिले पर्वत उडुगणउच्छेद ।।\nरामी रामदासा शक्तपचा शोध ।।\nजय देव जय देव जय हनुमंता ।। २ ।।"
    ]
  },
  {
    id: "gajanana",
    category: "आरती",
    title: "गजानना श्री गणराया",
    subtitle: "आधी वंदू तुज मोरया - शांता शेळके",
    source: `गजानना, श्री गणराया,
आधी वंदू तुज मोरया
मंगलमुर्ती, श्री गणराया,
आधी वंदू तुज मोरया

सिंदुरचर्चित धवळे अंग,
चंदन उटी खुलवी रंग
बघता मानस होते दंग,
जीव जडला चरणी तुझिया
आधी वंदू तुज मोरया

गौरीतनया भालचंद्रा,
देवा कृपेच्या तू समुद्रा
वरदविनायक करुणागारा,
अवघी विघ्ने नेसी विलया
आधी वंदू तुज मोरया 

-शांता शेळके`,
    sourceType: "text",
    sourceFile: "assets/docs/gajanana-ganaraya.txt",
    verses: [
      "गजानना, श्री गणराया,\nआधी वंदू तुज मोरया\nमंगलमुर्ती, श्री गणराया,\nआधी वंदू तुज मोरया ॥ धृ. ॥",
      "सिंदुरचर्चित धवळे अंग,\nचंदन उटी खुलवी रंग\nबघता मानस होते दंग,\nजीव जडला चरणी तुझिया\nआधी वंदू तुज मोरया",
      "गौरीतनया भालचंद्रा,\nदेवा कृपेच्या तू समुद्रा\nवरदविनायक करुणागारा,\nअवघी विघ्ने नेसी विलया\nआधी वंदू तुज मोरया\n\n— शांता शेळके"
    ]
  },
  {
    id: "ashwin",
    category: "आरती",
    title: "आश्विन शुद्ध पक्षी अंबा",
    subtitle: "अंबा बैसली सिंहासनी (नवरात्री आरती)",
    source: `Ashwin Shukla Paksha Aarti lyrics

आश्विन शुद्ध पक्षी अंबा बैसली सिंहासनी हो । 
प्रतिपदेपासून घटस्थापना ती करूनि हो । 
मूलमंत्रजप करूनी भोवतें रक्षक ठेऊनि हो । 
ब्रह्माविष्णुरुद्र आईचे पूजन करिती हो ॥१ ॥
 उदो बोला उदो अंबाबाई माऊलीचा हो । 
उदोकारे गर्जती काय महिमा वर्ण तिचा हो ॥ धृ ॥ 
द्वितीयेचे दिवशी मिळती चौसष्ट योगिनि हो । 
सकळांमध्ये श्रेष्ठ परशुरामाची जननी हो ॥ 
कस्तुरीमळवट भांगी शेंदुर भरूनी हो । 
उदोकारें गर्जती सकळ चामुंडा मिळुनि हो ॥ उदो ॥ २ ॥
तृतीयेचे दिवशी अंबे शृंगार मांडिला हो । 
मळकट पातळ चोळी कंठी हार मुक्ताफळा हो ॥ 
कंठीची पदके कांसे पीतांबर पिवळा हो ।
अष्टभुजा मिरविती अंबे सुंदर दिसे लीला हो ॥ उदो ॥३॥ 
चतुर्थीचे दिवशी विश्वव्यापक जननी हो ।
 उपासकां पाहसी अंबे प्रसन्न अंतःकरणीं हो ॥
 पूर्ण कृपे पाहसी जगन्माते मनमोहिनी हो ।
भक्तांच्या माऊलि सुर ते येती लोटांगणी हो ॥ उदो ॥ ४॥ 
पंचमीचे दिवशीं व्रत तें उपांगललिता हो ।
अर्घ्यपाद्यपूजनें तुजला भवानी स्तविती हो ॥ 
रात्रीचे समयी करिती जागरण हरिकथा हो ।
आनंदें प्रेम तें आलें सद्भावें क्रीडता हो ॥ उदो ॥ ५ ॥
षष्ठीचे दिवशी भक्तां आनंद वर्तला हो । 
घेऊनि दिवट्या हस्ती हर्षे गोंधळ घातला हो ॥
कवडी एक अर्पितां देसी हार मुक्तफलांचा हो । 
जोगवा मागतां प्रसन्न झाली भक्तकुळा हो ॥ उदो ॥ ६ ॥ 
सप्तमीचे दिवशी सप्तशृंगगडावरी हो ।
तेथें तूं नांदसी भोवतें पुष्पं नानापरी हो ॥
जाईजुईशेवंती पूजा रेखियली बरवी हो ।
भक्तसंकटी पडतां झेलूनि घेसी वरचे वरी हो ॥उदो ॥ ७॥ 
अष्टमीचे दिवशी अष्टभुजां नारायणी हो । 
सह्याद्रीपर्वती पाहिली उभी जगज्जननी हो ॥ 
मन माझें मोहिलें शरण आलों तुजलागुनी हो ।
स्तनपान देऊनि सुखी केली अंतःकरणीं हो ॥ उदो ॥ ८॥
नवमीचे दिवशीं नवदिवसांचे पारणे हो । 
सप्तशतीजप होम हवनें सद्भक्ती करूनी हो ॥
षड्रस अन्न नैवेद्यासी अर्पियली भोजनी हो । 
आचार्यब्राह्मणां तृप्त केलें कृपेंकरूनी हो ॥ उदो ॥ ९ ॥ 
दशमीच्या दिवशी अंबा निघे सीमोल्लंघनी हो । 
सिंहारूढे दारुण शस्त्रे अंबे त्वां घेऊनी हो ॥ 
शुंभनिशुंभादिक राक्षसा किती मारिसी रणी हो ।
विप्रा रामदासा आश्रय दिधला तो चरणी हो ॥ उदो ॥१० ॥
।।जगदंबा माता की जय।।`,
    sourceType: "text",
    sourceFile: "assets/docs/ashwin-shukla-paksha-aarti.txt",
    verses: [
      "आश्विन शुद्ध पक्षी अंबा बैसली सिंहासनी हो ।\nप्रतिपदेपासून घटस्थापना ती करूनि हो ।\nमूलमंत्रजप करूनी भोवतें रक्षक ठेऊनि हो ।\nब्रह्माविष्णुरुद्र आईचे पूजन करिती हो ॥ १ ॥",
      "उदो बोला उदो अंबाबाई माऊलीचा हो ।\nउदोकारे गर्जती काय महिमा वर्ण तिचा हो ॥ धृ. ॥",
      "द्वितीयेचे दिवशी मिळती चौसष्ट योगिनि हो ।\nसकळांमध्ये श्रेष्ठ परशुरामाची जननी हो ॥\nकस्तुरीमळवट भांगी शेंदुर भरूनी हो ।\nउदोकारें गर्जती सकळ चामुंडा मिळुनि हो ॥ उदो ॥ २ ॥",
      "तृतीयेचे दिवशी अंबे शृंगार मांडिला हो ।\nमळकट पातळ चोळी कंठी हार मुक्ताफळा हो ॥\nकंठीची पदके कांसे पीतांबर पिवळा हो ।\nअष्टभुजा मिरविती अंबे सुंदर दिसे लीला हो ॥ उदो ॥ ३ ॥",
      "चतुर्थीचे दिवशी विश्वव्यापक जननी हो ।\nउपासकां पाहसी अंबे प्रसन्न अंतःकरणीं हो ॥\nपूर्ण कृपे पाहसी जगन्माते मनमोहिनी हो ।\nभक्तांच्या माऊलि सुर ते येती लोटांगणी हो ॥ उदो ॥ ४ ॥",
      "पंचमीचे दिवशीं व्रत तें उपांगललिता हो ।\nअर्घ्यपाद्यपूजनें तुजला भवानी स्तविती हो ॥\nरात्रीचे समयी करिती जागरण हरिकथा हो ।\nआनंदें प्रेम तें आलें सद्भावें क्रीडता हो ॥ उदो ॥ ५ ॥",
      "षष्ठीचे दिवशी भक्तां आनंद वर्तला हो ।\nघेऊनि दिवट्या हस्ती हर्षे गोंधळ घातला हो ॥\nकवडी एक अर्पितां देसी हार मुक्तफलांचा हो ।\nजोगवा मागतां प्रसन्न झाली भक्तकुळा हो ॥ उदो ॥ ६ ॥",
      "सप्तमीचे दिवशी सप्तशृंगगडावरी हो ।\nतेथें तूं नांदसी भोवतें पुष्पं नानापरी हो ॥\nजाईजुईशेवंती पूजा रेखियली बरवी हो ।\nभक्तसंकटी पडतां झेलूनि घेसी वरचे वरी हो ॥ उदो ॥ ७ ॥",
      "अष्टमीचे दिवशी अष्टभुजां नारायणी हो ।\nसह्याद्रीपर्वती पाहिली उभी जगज्जननी हो ॥\nमन माझें मोहिलें शरण आलों तुजलागुनी हो ।\nस्तनपान देऊनि सुखी केली अंतःकरणीं हो ॥ उदो ॥ ८ ॥",
      "नवमीचे दिवशीं नवदिवसांचे पारणे हो ।\nसप्तशतीजप होम हवनें सद्भक्ती करूनी हो ॥\nषड्रस अन्न नैवेद्यासी अर्पियली भोजनी हो ।\nआचार्यब्राह्मणां तृप्त केलें कृपेंकरूनी हो ॥ उदो ॥ ९ ॥",
      "दशमीच्या दिवशी अंबा निघे सीमोल्लंघनी हो ।\nसिंहारूढे दारुण शस्त्रे अंबे त्वां घेऊनी हो ॥\nशुंभनिशुंभादिक राक्षसा किती मारिसी रणी हो ।\nविप्रा रामदासा आश्रय दिधला तो चरणी हो ॥ उदो ॥ १० ॥\n\n॥ जगदंबा माता की जय ॥"
    ]
  }
];

const palettes = new Set(["ivory", "rose", "sage", "sky", "sandal", "night"]);
const prayerIds = new Set(prayers.map((prayer) => prayer.id));
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
function readSavedSettings() {
  try {
    const value = localStorage.getItem("aradhana-settings");
    return value ? JSON.parse(value) : {};
  } catch {
    return {};
  }
}
const saved = readSavedSettings();
const state = {
  active: prayerIds.has(saved.active) ? saved.active : "khandoba",
  fontSize: clamp(Number(saved.fontSize) || 28, 22, 44),
  spacing: clamp(Number(saved.spacing) || 1.8, 1.45, 2.2),
  palette: palettes.has(saved.palette) ? saved.palette : "ivory",
  focus: false,
  libraryOpen: false,
  settingsOpen: false
};
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function activePrayer() { return prayers.find((prayer) => prayer.id === state.active) || prayers[0]; }
function save() {
  try {
    localStorage.setItem("aradhana-settings", JSON.stringify({ active: state.active, fontSize: state.fontSize, spacing: state.spacing, palette: state.palette }));
  } catch {
    // The reader remains fully usable when a browser blocks local storage.
  }
}
function icon(id) { return `<svg aria-hidden="true"><use href="#${id}"></use></svg>`; }
let toastTimer;
function announce(message) {
  const toast = $("#feedbackToast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1700);
}
function renderLibrary(filter = "") {
  const term = filter.trim().toLowerCase();
  const visible = prayers.filter((prayer) => `${prayer.title} ${prayer.subtitle} ${prayer.category} ${prayer.verses.join(" ")}`.toLowerCase().includes(term));
  $("#libraryList").innerHTML = visible.length ? visible.map((prayer) => `
    <button class="library-item ${prayer.id === state.active ? "is-active" : ""}" type="button" data-prayer="${prayer.id}">
      <span class="library-icon">${icon(prayer.category === "श्लोक" ? "i-book" : "i-flame")}</span>
      <span class="library-copy"><b>${prayer.title}</b><span>${prayer.category}</span></span>
    </button>`).join("") : `<p class="empty-state">कोणतीही आरती सापडली नाही.</p>`;
  $$("[data-prayer]").forEach((button) => button.addEventListener("click", () => selectPrayer(button.dataset.prayer)));
}
function renderReader({ shouldFocus = false } = {}) {
  const prayer = activePrayer();
  $("#crumbText").textContent = prayer.category === "श्लोक" ? "श्लोक संग्रह" : (prayer.category === "स्तोत्र" ? "स्तोत्र संग्रह" : "आरती संग्रह");
  $("#categoryText").textContent = prayer.category;
  $("#titleText").textContent = prayer.title;
  $("#subtitleText").textContent = prayer.subtitle;
  const reading = $("#readingText");
  reading.className = `reading-text ${prayer.layout || ""}`;
  reading.innerHTML = prayer.verses.map((verse, index) => `<p class="verse ${verse.includes("धृ") || verse.includes("ध्रु") ? "refrain" : ""}">${verse}</p>`).join("");
  const current = prayers.findIndex((item) => item.id === prayer.id);
  $("#readingCount").textContent = `${current + 1} / ${prayers.length}`;
  $("#previousButton").disabled = current === 0;
  $("#nextButton").disabled = current === prayers.length - 1;
  $("#previousButton").style.visibility = current === 0 ? "hidden" : "visible";
  $("#nextButton").style.visibility = current === prayers.length - 1 ? "hidden" : "visible";

  const sourceLabel = $(".source-link span");
  const sourceIconUse = $(".source-link svg use");
  if (sourceLabel) {
    if (prayer.sourceType === "pdf") {
      sourceLabel.textContent = "मूळ PDF";
      if (sourceIconUse) sourceIconUse.setAttribute("href", "#i-book");
    } else if (prayer.sourceType === "text") {
      sourceLabel.textContent = "मूळ प्रत";
      if (sourceIconUse) sourceIconUse.setAttribute("href", "#i-book");
    } else {
      sourceLabel.textContent = "मूळ प्रतिमा";
      if (sourceIconUse) sourceIconUse.setAttribute("href", "#i-image");
    }
  }

  renderLibrary($("#searchInput").value);
  if (shouldFocus) { setTimeout(() => reading.focus({ preventScroll: true }), 0); }
}
function updateSettings() {
  document.body.dataset.palette = state.palette;
  document.body.style.setProperty("--font-size", `${state.fontSize}px`);
  document.body.style.setProperty("--line-height", String(state.spacing));
  $("#fontOutput").textContent = `${state.fontSize}px`;
  $("#fontRange").value = String(state.fontSize);
  $("#spacingOutput").textContent = state.spacing.toFixed(2).replace(/0$/, "");
  $("#spacingRange").value = state.spacing;
  $$(".palette-button").forEach((button) => {
    const chosen = button.dataset.palette === state.palette;
    button.classList.toggle("is-active", chosen);
    button.setAttribute("aria-pressed", chosen);
  });
  $("#themeIcon use").setAttribute("href", state.palette === "night" ? "#i-sun" : "#i-moon");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", state.palette === "night" ? "#1d2321" : "#f4f1e8");
  save();
}
function setPanel(panel, open) {
  if (panel === "library") { state.libraryOpen = open; document.body.classList.toggle("library-open", open); }
  if (panel === "settings") { state.settingsOpen = open; document.body.classList.toggle("settings-open", open); }
}
function selectPrayer(id) {
  if (!prayerIds.has(id)) return;
  state.active = id;
  renderReader({ shouldFocus: true });
  save();
  setPanel("library", false);
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  try {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  } catch {
    window.scrollTo(0, 0);
  }
  announce(`${activePrayer().title} निवडली आहे`);
}
function changePrayer(direction) {
  const index = prayers.findIndex((prayer) => prayer.id === state.active);
  const next = prayers[index + direction];
  if (next) selectPrayer(next.id);
}
function openDialog(dialog) {
  if (typeof dialog.showModal === "function") dialog.showModal();
  else { dialog.setAttribute("open", ""); dialog.classList.add("is-open"); }
}
function closeDialog(dialog) {
  if (typeof dialog.close === "function") dialog.close();
  else { dialog.removeAttribute("open"); dialog.classList.remove("is-open"); }
}
function showSource() {
  const prayer = activePrayer();
  const image = $("#sourceImage");
  const pdf = $("#sourcePdf");
  const textEl = $("#sourceText");
  const isPdf = prayer.sourceType === "pdf";
  const isText = prayer.sourceType === "text";

  image.style.display = (!isPdf && !isText) ? "block" : "none";
  pdf.style.display = isPdf ? "block" : "none";
  if (textEl) textEl.style.display = isText ? "block" : "none";

  if (isPdf) {
    pdf.data = encodeURI(`./${prayer.sourceFile || prayer.source}`);
    $("#sourceDescription").textContent = "ही दिलेल्या संग्रहातील मूळ PDF प्रत आहे. वाचनासाठी वरील मजकूर निवडता व अक्षरांचा आकार बदलता येतो.";
    $("#sourceDialogTitle").textContent = `${prayer.title} - मूळ PDF`;
  } else if (isText) {
    if (textEl) {
      textEl.textContent = prayer.sourceText || prayer.source;
    }
    $("#sourceDescription").textContent = "हा दिलेल्या संग्रहातील मूळ मजकूर आहे. वाचनासाठी वरील मजकूर निवडता व अक्षरांचा आकार बदलता येतो.";
    $("#sourceDialogTitle").textContent = `${prayer.title} - मूळ प्रत`;
  } else {
    image.src = encodeURI(`./${prayer.source}`);
    image.alt = `${prayer.title} ची मूळ प्रतिमा`;
    $("#sourceDescription").textContent = "ही दिलेल्या संग्रहातील मूळ प्रतिमा आहे. वाचनासाठी वरील मजकूर निवडता व अक्षरांचा आकार बदलता येतो.";
    $("#sourceDialogTitle").textContent = `${prayer.title} - मूळ प्रतिमा`;
  }
  openDialog($("#sourceDialog"));
}
function setFocus(enabled) {
  state.focus = enabled;
  document.body.classList.toggle("focus-mode", state.focus);
  $("#focusToggle").setAttribute("aria-checked", String(state.focus));
  if (state.focus) setPanel("settings", false);
  announce(state.focus ? "एकाग्र वाचन सुरू" : "एकाग्र वाचन बंद");
}
function toggleFocus() { setFocus(!state.focus); }
function setFontSize(value, announceChange = false) {
  state.fontSize = clamp(Number(value) || 28, 22, 44);
  updateSettings();
  if (announceChange) announce(`अक्षर आकार ${state.fontSize}px`);
}
function setSpacing(value, announceChange = false) {
  state.spacing = clamp(Number(value) || 1.8, 1.45, 2.2);
  updateSettings();
  if (announceChange) announce(`ओळींमधील अंतर ${state.spacing.toFixed(2).replace(/0$/, "")}`);
}
function handleAction(action) {
  if (action === "open-library") setPanel("library", true);
  else if (action === "close-library") setPanel("library", false);
  else if (action === "open-settings") setPanel("settings", true);
  else if (action === "close-settings") setPanel("settings", false);
  else if (action === "previous") changePrayer(-1);
  else if (action === "next") changePrayer(1);
  else if (action === "font-down") setFontSize(state.fontSize - 2, true);
  else if (action === "font-up") setFontSize(state.fontSize + 2, true);
  else if (action === "toggle-focus") toggleFocus();
  else if (action === "exit-focus") setFocus(false);
  else if (action === "toggle-theme") { state.palette = state.palette === "night" ? "ivory" : "night"; updateSettings(); announce(state.palette === "night" ? "रात्र रंगसंगती सुरू" : "शुभ्र रंगसंगती सुरू"); }
  else if (action === "open-source") showSource();
  else if (action === "close-source") closeDialog($("#sourceDialog"));
}
function bindControls() {
  $$("[data-action]").forEach((button) => button.addEventListener("click", () => handleAction(button.dataset.action)));
  $$("[data-palette]").forEach((button) => button.addEventListener("click", () => { state.palette = button.dataset.palette; updateSettings(); announce(`${button.textContent.trim()} पार्श्वभूमी निवडली`); }));
  $("#scrim").addEventListener("click", () => { setPanel("library", false); setPanel("settings", false); });
  // Hide FAB when settings open, show when closed
  const fab = $(".mobile-fab");
  if (fab) {
    const observer = new MutationObserver(() => {
      fab.classList.toggle("is-hidden", document.body.classList.contains("settings-open"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  }
  $("#searchInput").addEventListener("input", (event) => renderLibrary(event.target.value));
  $("#fontRange").addEventListener("input", (event) => setFontSize(event.target.value));
  $("#fontRange").addEventListener("change", (event) => setFontSize(event.target.value, true));
  $("#spacingRange").addEventListener("input", (event) => setSpacing(event.target.value));
  $("#spacingRange").addEventListener("change", (event) => setSpacing(event.target.value, true));
  $("#sourceDialog").addEventListener("click", (event) => { if (event.target === $("#sourceDialog")) closeDialog($("#sourceDialog")); });
}

bindControls();
updateSettings();
renderReader();
