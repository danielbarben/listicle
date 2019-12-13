import React, {Component} from 'react';
import Images from '../Img';
let data = [
  {"vorname": "Matthias", "name": "Aebischer", "pic": Images.Aebischer, "funktion": "SP-Nationalrat", "text": <div className='person'><div className='text center'><img src={Images.Aebischer} alt='Mathias Aebischer' className='portrait'/></div><div className='text'>«Der Frauenstreik war sicher der Höhepunkt des Frauenwahljahrs. Meine Töchter waren auch alle mit dabei. Das hat mir gefallen. Am Wahlsonntag war ich dann aber trotzdem enttäuscht. Es war eine Katastrophe für die SP-Männer, zwei der drei bisherigen Sitze zu verlieren. Mir wäre es lieber gewesen, wenn die Grünen auf Kosten von anderen Parteien zugelegt hätten. Ich bin zwar auch ein Grüner. Als SPler steht bei mir aber das Soziale klar an erster Stelle.</div><div className='quote'>«Es ist wichtig, dass die Berner SP jetzt analysiert, ob man weiterhin mit getrennten Frauen- und Männerlisten antreten will.»</div><div className='text'>Ich bin stolz, dass ich in einer Fraktion bin, wo es mehr Frauen gibt als Männer. Auch wenn es von mir aus halb-halb sein könnte. Wir sind jetzt am Anfang der Legislatur und spüren einen frischen Wind, es herrscht ein guter Groove, das Parlament wurde verjüngt. Da sind neue Ideen, Leute, die Energie haben, Leute, die auf Augenhöhe diskutieren, es geht um die Sache. Möglicherweise ist das typisch Frauen. Es könnte sein, dass Frauen sachlicher politisieren. Und es gibt wohl mehr Männer, die in die Fläche reden, sprich, sich nicht primär zum Thema äussern und einfach Raum einnehmen.</div><div className='text'></div><div className='text'>Es ist wichtig, dass die Berner SP jetzt analysiert, ob man weiterhin mit getrennten Frauen- und Männerlisten antreten will. Das sollte innerhalb der nächsten zwölf Monaten entschieden werden und nicht erst kurz vor den nächsten Wahlen. Ich bin in diesem Punkt ergebnisoffen, aber man darf sich heute schon die Frage stellen, ob wir mit nur einer Liste einen Sitz mehr geholt hätten.»</div></div>},

  {"vorname": "Christa","name": "Ammann", "pic": Images.Ammann, "funktion": "Xenia, Beratungsstelle für Sexarbeit", "text": <div className='person'><div className='text center'><img src={Images.Ammann} alt='Christa Ammann' className='portrait'/></div><div className='text'>«In Bern haben keine Sexarbeiterinnen organisiert am Frauenstreik teilgenommen. Viele haben den Lebensmittelpunkt nicht in der Schweiz, haben kein Netzwerk ausserhalb der Arbeit, wechseln oft den Arbeitsort. Zudem sind sie selbstständigerwerbend – sie können es sich wegen der hohen Fixkosten nicht leisten, einen Tag nicht zu arbeiten. Kurz vor dem Streik regte ein Mann an, man könnte bei den Freiern einen Aufruf starten: Sie könnten Geld spenden, damit Xenia den Frauen am Streiktag Lohnersatz zahle. So hätten die Sexarbeiterinnen streiken können. Leider kam die Idee zu spät, es war organisatorisch nicht mehr umsetzbar.</div><div className='quote'>«Sexarbeiterinnen können nicht einfach einen Block machen an einer Demo. Das Stigma ist zu gross.»</div><div className='text'>Ausserdem ist es auch nicht so leicht für  Sexarbeiterinnen. Das ist nicht wie in anderen Branchen, die können nicht einfach einen Sexarbeiterinnen-Block machen an einer Demo: Das Stigma ist zu gross, viele können wegen möglicher Konsequenzen nicht öffentlich zu ihrer Arbeit stehen. Ganz allgemein wünsche ich mir, dass Sexarbeit nicht gesondert betrachtet würde, sondern als Erwerbsarbeit, wo dieselben Kämpfe stattfinden wie in anderen Branchen.</div><div className='text'></div><div className='text'>Vielen Sexarbeiterinnen ist der internationale Frauentag am 8. März wichtig, der vor allem in Osteuropa begangen wird. Wir bringen ihnen an diesem Tag der Tradition entsprechend während ihrer Arbeitszeit Blumen vorbei, es entstehen Gespräche über Frauenrechte. Frauen- und Arbeitsrechte sind vielen Sexarbeiterinnen wichtig, sie wissen, dass sie für sie als Frau und als Sexarbeiterin zentral sind, auch wenn der Frauenstreik nichts für sie verändert hat.»</div><div className='text'></div></div>},
  
  {"vorname": "Regula","name": "Frei", "pic": Images.Frei, "funktion": "Helvetiarockt, Vernetzungsplattform Musikerinnen", "text": <div className='person'><div className='text center'><img src={Images.Frei} alt='Regula Frei' className='portrait'/></div><div className='text'>«Uns hat der Frauenstreik noch mehr Auftrieb gegeben. Die Legitimation, keine Frauen auf Bühnen zu buchen, ist jetzt noch weniger da. Vorher wussten zwar viele, dass man Frauen buchen sollte, aber innerlich waren sie dann doch nicht richtig überzeugt. Jetzt ploppt der Frauenstreik als Argument immer wieder auf. Die Branche bewegt sich. Dazu hat aber auch die vorher lancierte Keychange-Initiative beigetragen. Sie fordert eine 50-zu-50-Quote im Musikbereich. Sie kommt aus England, und irgendwie traut man hierzulande Sachen noch mehr, wenn sie aus dem Ausland kommen.</div><div className='quote'>«Ich glaube, dass viele Musikerinnen durch den Frauenstreik an Selbstvertrauen zugelegt haben, sie wehren sich eher, wenn sie von Sexismus oder Diskriminierung betroffen sind.»</div><div className='text'>Ich glaube, dass viele Musikerinnen durch den Frauenstreik an Selbstvertrauen zugelegt haben, sie wehren sich jetzt eher, wenn sie von Sexismus oder Diskriminierung betroffen sind. Uns hat der Frauenstreik gezeigt, dass wir dranbleiben wollen und dass es Zeit für konkrete Aktionen ist. So wie die «Diversity Roadmap», die wir eher zufällig parallel zum Frauenstreik lanciert haben. Sie ist ein Faltflyer, der eine Anleitung gibt, wie man als Club oder Festival diverser werden kann. Die «Diversity Roadmap» stösst auf sehr grosses Interesse. Im kommenden Januar sind wir sogar eingeladen, das Projekt am Eurosonic-Musikfestival in den Niederlanden vorzustellen.</div><div className='text'></div><div className='text'>All diese Bestrebungen wären wir sowieso angegangen, aber dass sie so gut ankommen, hat bestimmt auch mit dem Frauenstreik zu tun. Es war genau das richtige Jahr dafür,  solche Hilfsmittel unter die Menschen zu bringen.»</div></div>},

  {"vorname": "Rita","name": "Gfeller", "pic": Images.Gfeller, "funktion": "Präsidentin Verband Bernischer Landfrauenvereine", "text": <div className='person'><div className='text center'><img src={Images.Gfeller} alt='Rita Gfeller' className='portrait'/></div><div className='text'>«Für die Bäuerinnen ist es wie für alle anderen Frauen positiv, dass nun mehr Frauen im eidgenössischen Parlament sind. Der Streik hat die Sensibilität für Frauenthemen in der Öffentlichkeit gestärkt. Frauen wagen es auch eher, Forderungen zu stellen. Was aber eine langwierige Sache bleiben wird, ist die soziale Absicherung der Bäuerinnen. Da stellen sich der Schweizer Bauernverband und viele Politiker und Politikerinnen leider nicht hinter die Forderungen des Schweizerischen Bäuerinnen- und Landfrauenverbands, dass diese obligatorisch werden soll. Aber wenn sie wie heute freiwillig bleibt, machen es viele nicht. Das können wir ändern, indem wir die Frauen selbst immer wieder auf die Problematik aufmerksam machen. Persönlich, an Anlässen, an der Schule.</div><div className='quote'>«Was eine langwierige Sache bleiben wird, ist die soziale Absicherung der Bäuerinnen.»</div><div className='text'>Viele Bäuerinnen sind sich nicht bewusst, dass sie ohne Lohn keine AHV erhalten. Viele finden, es sei unsinnig, vom kleinen Einkommen eines Hofes noch Lohn auszuzahlen. Aber es geht dabei ja nicht zwingend darum, dass dieser Lohn fliesst, auch wenn das natürlich schön wäre. Sondern darum, dass die Frau auf dem Papier Lohn erhält. Das ist wichtig, auch bei einer Scheidung oder einem Todesfall. Viele Bauern und Bäuerinnen sind SVP-nahe und tragen deren Meinung mit. Ich hoffe, dass die Partei umdenkt. Mich dauerts, wenn nicht einmal Frauen für Frauen einstehen. Wenn alle Frauen zueinanderstehen würden, hätten wir die Mehrheit. Wir sind ja die Mehrheit der Bevölkerung. Es gibt also nur eines für unsere Anliegen: Dranbleiben, auch wenn der Streik und die Wahlen vorbei sind.»</div></div>},
  
  {"vorname": "Oliver","name": "Hunziker", "pic": Images.Hunziker, "funktion": "Gründer des Männer- und Väterhauses in Bern", "text": <div className='person'><div className='text center'><img src={Images.Hunziker} alt='Oliver Hunziker' className='portrait'/></div><div className='text'>«Ich merke, dass die Verunsicherung bei den Männern zugenommen hat. Die Väter, die zu uns in die Beratungen kommen, stecken oft in einer schwierigen Situation mit ihrer ehemaligen Partnerin. Sie möchten nach der Trennung partnerschaftlich für die Kinder sorgen und sind frustriert, wenn die Frau ablehnt. Vor Gericht bekommen sie zu spüren, wie das Schweizer Scheidungsrecht Männer benachteiligt. Kein Wunder, sind viele schlecht auf den Frauenstreik zu sprechen.</div><div className='quote'>«Geht es den Frauen um Lösungen für alle oder wollen sie einfach für sich selbst mehr herausholen?»</div><div className='text'>Auch ich frage mich manchmal: Geht es den Frauen darum, Lösungen für alle zu finden, oder wollen sie einfach für sich selbst mehr herausholen? Sie reden stets von Rechten. Was ist mit Pflichten, zum Beispiel der Dienstpflicht? Der Durchschnittsmann ist kein privilegierter, alter weisser Mann. Er dreht wie viele Frauen im täglichen Hamsterrad und hat mit Nachteilen zu kämpfen. Es sind auch nicht alle Männer schuld, dass Frauen im Schnitt weniger verdienen. Die Gründe dafür sind vielschichtig.</div><div className='text'></div><div className='text'>Man darf leider nicht mal fragen, ob es auch an der Art liegen könnte, wie Frauen mehrheitlich Lohngespräche führen. Abgesehen davon: Wie gross ist die Lohndifferenz eigentlich? Frauenorganisationen reden von 20 Prozent. Das ist meiner Meinung nach so nicht richtig. Ein Grossteil des Lohnunterschieds geht auf Faktoren wie schlechtere Ausbildung, weniger finanzstarke Branche oder niedrigere Position zurück. Nur 8 Prozent sind nicht erklärbar und somit diskriminierend. Es wäre gut, wenn wir vom Gleichen sprächen, dann könnten Männer und Frauen gemeinsam Probleme angehen.»</div></div>},

  {"vorname": "Pasqualina","name": "Perrig", "pic": Images.Perrig, "funktion": "Generationenforscherin", "text": <div className='person'><div className='text center'><img src={Images.Perrig} alt='Pasqualina Perrig' className='portrait'/></div><div className='text'>«Braucht es eine Generation, bis sich in Sachen Gleichstellung etwas verbessert? Beim Frauenstreik im Jahr 1991 ging es vor allem um gleiche Bildungschancen, Lohngleichheit, um die Vereinbarkeit von Beruf und Familie. Am Frauenstreik 28 Jahre später finden wir viele dieser Frauen – nunmehr Grossmütter geworden – zusammen mit der jüngeren Generation von Frauen. Die Forderungen sind fast die gleichen wie damals. Etwas ist allerdings anders: Frauen haben endlich die gleichen Bildungschancen wie Männer. Geblieben sind die Ungleichheiten beim Lohn und bei der Verteilung der Care-Arbeit, welche Frauen jeglichen Alters betrifft. Diese Ungleichheiten haben langfristige Folgen, unter denen nach wie vor insbesondere Frauen leiden, wie etwa Armut im Alter.</div><div className='quote'>«Der Druck zum Handeln ist stark spürbar.»</div><div className='text'>Die generationenübergreifende Beteiligung von Frauen und Männern am Frauenstreik vom 14. Juni dieses Jahres lässt hoffen, dass wir jetzt nicht nochmals 28 Jahre – das wäre bis 2047 – warten müssen, bis etwas geschieht. Das Sichtbarmachen dieser Ungleichheiten, das Wachrütteln war dringend nötig.</div><div className='text'></div><div className='text'>Jetzt müssen den Worten endlich Taten folgen. Der Druck zum Handeln ist bereits stark spürbar. Beispielsweise in der klaren politischen Forderung nach einem längeren Mutter- und Vaterschaftsurlaub oder aber auch in der Schaffung der Interessengemeinschaft Angehörigenbetreuung. Diese hat vor allem zum Ziel, die Vereinbarkeit von Betreuungsarbeit und beruflicher Tätigkeit zu verbessern.»</div><div className='text'></div></div>},

  {"vorname": "Corinne","name": "Schmidhauser", "pic": Images.Schmidhauser, "funktion": "Leiterin Feusi-Sportschulen, Ex-Skirennfahrerin, FDP-Grossrätin", "text": <div className='person'><div className='text center'><img src={Images.Schmidhauser} alt='Corinne Schmidhauser' className='portrait'/></div><div className='text'>«Der Frauenstreik war auch eine Gelegenheit, um zu zeigen, was bereits Tatsache ist: Im Internationalen Sportschiedsgericht, wo ich in der Leitung bin, sind Frauen und Männer je hälftig vertreten. Dafür brauchte es keinen Frauenstreik. Doch im Sport kamen Ungleichheiten an die Oberfläche. Im Fussball merkt man langsam, wie gut es tut, wenn der Frauensport mehr gewichtet wird. Frauenfussball erhält mehr mediale Aufmerksamkeit, was Sponsoren anzieht und Auswirkungen auf den Lohn der Sportlerinnen hat. Das ist toll und gerechtfertigt. Der Frauenfussball bringt neue Fans und führt den Fussball hoffentlich in die heutige Zeit der Gleichberechtigung.</div><div className='quote'>«Ich glaube, dass viele Musikerinnen durch den Frauenstreik an Selbstvertrauen zugelegt haben, sie wehren sich eher, wenn sie von Sexismus oder Diskriminierung betroffen sind.»</div><div className='text'>Gleichberechtigung heisst aber nicht Gleichheit. Im Leistungssport geht es ja um Leistung. Und da sieht man Geschlechterunterschiede. In den Feusi-Sportschulen widmen sich deutlich mehr junge Männer dem Leistungssport. Deshalb sind im Männersport Konkurrenz sowie Markt viel grösser, entsprechend fliesst mehr Geld. Das rechtfertigt schon unterschiedliche Löhne. Junge Leistungssportlerinnen erleben wir als sehr selbstbewusst. Das hat wohl mit dem Bewusstsein für die bereits erbrachte Leistung zu tun.</div><div className='text'></div><div className='text'>Etliche fühlten sich deshalb eher beleidigt durch den Frauenstreik. Sie fanden, sie bräuchten niemanden, der für sie spricht und einsteht. In der Bildung realisiert man langsam, dass in unserem System eher junge Männer benachteiligt werden. Ich hoffe, dass der Streik auch das Bewusstsein für solche Genderfragen geschärft hat.»</div></div>},

  {"vorname": "Sara","name": "Stalder", "pic": Images.Stalder, "funktion": "Geschäftsleiterin Stiftung für Konsumentenschutz", "text": <div className='person'><div className='text center'><img src={Images.Stalder} alt='Sara Stalder' className='portrait'/></div><div className='text'>«Ich habe den Eindruck, dass der Frauenstreik unterschiedlich spürbare Veränderungen gebracht hat. Gefruchtet hat er bei der neuen Zusammensetzung des Parlaments, was doch ein positives Signal ist. Die Schweizer Anbieter und die Industrie fallen im europäischen Vergleich jedoch weiterhin stark ab. Das ist sehr unbefriedigend für ein so innovatives Land, denn die Förderung der Frauen ist nicht erst seit dem Frauenstreik Thema, sondern seit vielen Jahren. Die obersten Gremien von Unternehmungen sind nach wie vor männlich besetzt.</div><div className='quote'>«Mein Eindruck ist, dass Frauen an der Spitze der Wirtschaft wenn überhaupt in Notsituationen gefragt sind.»</div><div className='text'>Mein Eindruck der letzten zehn Jahre ist, dass Frauen an der Spitze wenn überhaupt in Notsituationen gefragt sind. Ich habe das mehrfach erlebt, beispielsweise in der Energie- oder der Versicherungsbranche: quasi dann, wenn es nichts mehr zu verlieren gibt. Wenn ich als Konsumentenschützerin an Veranstaltungen eingeladen werde, bin ich in vielen Themenbereichen die einzige Frau auf dem Panel. Stossend ist zudem die sogenannte Pink Tax: dass Unternehmen Produkte für Frauen teurer verkaufen als jene für Männer.</div><div className='text'></div><div className='text'>Das Bekenntnis der Unternehmen zu mehr Frauen in Führungspositionen ist überfällig. Doch das passiert in unserem Land nicht automatisch. Für mich ist klar: Es braucht klare Vorgaben wie beispielsweise Quoten, damit sich Managements endlich aktiv bemühen, qualifizierte Frauen in ihre Führungsgremien aufzunehmen – und dies nicht nur im Bereich Human Ressource. Erst so kann diese zementierte Situation aufgebrochen und Veränderung herbeigeführt werden. Von einem spontanen Umdenken ist beim Gros der Unternehmungen noch nichts zu spüren.»</div></div>}
  
]

export default data;