#!/usr/bin/env node

/**
 * Module Dependencies
 */

var program = require('commander');
var fs = require('fs');
var _ = require('underscore');

program
    .version('0.0.1')
    .option('-o, --to_object', 'Convert to Object Javascript')
    .option('-x, --to_xls', 'Convert to XLS')
    .parse(process.argv);

/**/
if (program.to_object) console.log('- object js ');
if (program.to_xls) {

    fs.readFile('translations.js', 'utf8', function(err, data){

        var dados = [   
    ['Chave',   'Português', 'Inglês'],
    [SITE_TITLE , 'Newsource Globo','Newsource Globo'],
    [INDEX_HOME , 'Home','Home'],
    [INDEX_EVENTS , 'Events','Eventos'],
    [INDEX_FACILITIES , 'Facilities','Instalações'],
    [INDEX_CONTENT , 'Content','Conteúdo'],
    [INDEX_PRESENTATION , 'Presentation','Apresentação'],
    [INDEX_HARD_NEWS , 'Hard News','Hard News'],
    [INDEX_ARCHIVE , 'Archive', 'Arquivo'],
    [INDEX_COMPILATIONS , 'Compilations','Coletânea'],
    [INDEX_ABOUT , 'About','Sobre'],
    [INDEX_CONTACT , 'Contact','Contato'],
    [INDEX_LOADING , 'loading...','Carregando...'],
    [LOGIN_HOME , 'Home','Home'],
    [LOGIN_EVENTS , 'Events','Eventos'], 
    [LOGIN_FACILITIES , 'Facilities','Instalações'],
    [LOGIN_CONTENT , 'Content','Conteúdo'],
    [LOGIN_ABOUT , 'About','Sobre'],
    [LOGIN_LOGIN , 'Login','Login'],
    [LOGIN_USERNAME , 'User','Usuário'],
    [LOGIN_PASSWORD , 'Password','Senha'],
    [LOGIN_BTNSUCCESS , 'Login','Entrar'],
    [ADVANCED_SEARCH_TOP , 'Advanced Search','Busca Avançada'],
    [HEADER_REGISTER , 'register','registrar'],
    [BROADCASTING_FROM , 'Broadcasting From Brazil','Transmitindo do Brasil'],
    [ABOUT_HEAD , 'About','Sobre'],
    [ABOUT_TEXT1 , 'NEWSOURCE GLOBO - NewSource Globo is the new initiative of the biggest Brazilian and South American broadcaster, Globo Network. Brazil will host some of the world´s most important events in the coming years, attracting the attention of the entire world. In order to assist international broadcasters with their news production and coverage, while also revealing the beauty, rich culture, and diversity of Brazilian people,','NEWSOURCE GLOBO - NewSource Globo é a nova iniciativa da maior emissora brasileira e sul-americana, da Rede Globo. O Brasil vai sediar alguns dos eventos mais importantes do mundo nos próximos anos, atraindo a atenção de todo o mundo. A fim de auxiliar as emissoras internacionais com a sua produção de notícias e cobertura, além de revelar a beleza, a rica cultura e diversidade da população brasileira,'],
    [ABOUT_TEXT2 , 'NewSource Globo offers the in-depth experience and knowledge of a comprehensive crew who is familiar with every corner of this vast country. As a news and media services agency, NewSource Globo aims to expedite broadcasters’ operations, contributing to high quality journalistic productions, which is the trademark of the leading and largest free TV network in Brazil.','NewSource Globo oferece a experiência em profundidade e conhecimento de um grupo abrangente que está familiarizado com todos os cantos deste imenso país. Como notícias e mídia agência de serviços, NewSource Globo visa agilizar as operações das empresas de radiodifusão, contribuindo para produções jornalísticas de alta qualidade, que é a marca registrada da rede principal e maior televisão de acesso livre no Brasil.'],
    [ABOUT_TEXT3 , 'Why Globo?','Por que Globo?'],
    [ABOUT_TEXT4 , 'Globo Network is part of a multi-brand diversified media company with massive presence in all sectors of the communications industry in Brazil. During the last 48 years, Globo has strived to secure and maintain its leading position, while looking to the future and offering its customers the very best.','A Rede Globo faz parte de uma empresa multi-marca de mídia diversificada, com presença maciça em todos os setores da indústria de comunicação no Brasil. Durante os últimos 48 anos, a Globo tem se esforçado para garantir e manter sua posição de liderança, ao olhar para o futuro e oferecer aos seus clientes o melhor.'],
    [ABOUT_TEXT5 , 'Globo owns five TVstations in Rio de Janeiro, São Paulo, Recife, Brasilia and Belo Horizonte, in addition to 117 independent affiliates that distribute Globo´s signal across 99% of the national territory, reaching 5.487 cities and 99.5% of the population.  The company captures 48% of the Brazilian market´s total investment.','A Globo possui cinco emissoras de TV no ​​Rio de Janeiro, São Paulo, Recife, Brasília e Belo Horizonte, além de 117 filiais independentes que distribuem o sinal da Globo em 99% do território nacional, atingindo 5.487 municípios e 99,5% da população. A empresa capta 48% do investimento total do mercado brasileiro.'],
    [ABOUT_TEXT6 , 'Our headquarters in Rio de Janeiro is the first purpose-built structure projected for television in the country. Globo also owns the largest and most modern television production center in Latin America, where 90% of its entertainment programming is produced.','Nossa sede no Rio de Janeiro é a primeira estrutura no país, projetada e construída propositadamente para a televisão. A Globo também possui o maior e mais moderno centro de produção de televisão na América Latina, onde 90% de sua programação de entretenimento é produzido.'],
    [ABOUT_TEXT7 , 'Annual production includes over 2500 hours of audiovisual content and over 1800 hours of journalistic content, with significant contribution from our international offices in New York, Washington D.C., London, Paris, Portugal and Israel, among others.','A produção anual inclui mais de 2.500 horas de conteúdo audiovisual e mais de 1.800 horas de conteúdo jornalístico, com contribuição significativa de nossos escritórios internacionais em Nova York, Washington DC, Londres, Paris, Portugal e Israel, entre outros.'],
    [ABOUT_TEXT8 , 'In 1996, the inauguration of the 24 hours news channel - GloboNews - reinforced our vocation for journalism. As a cable channel, GloboNews has comprehensive programming that favors information quality and includes special programs and Breaking News.','Em 1996, a inauguração do canal de notícias 24 horas - GloboNews - reforçou a nossa vocação para o jornalismo. Como um canal a cabo, GloboNews tem programação abrangente que favorece a qualidade da informação e inclui programas especiais e notícias de última hora.'],
    [ABOUT_TEXT9 , 'Globo´s programing is present in over 155 countries, in 43 different languages. The proof of our quality is the great variety of national and international awards we have won, such as the EMMY – considered the Oscar of the television industry; the Business in the Community Awards for Excellence and the Premio Iberoamericano de Comunicación.','A programação da Globo está presente em mais de 155 países, em 43 idiomas diferentes. A prova da nossa qualidade é a grande variedade de prêmios nacionais e internacionais, nós ganhamos, como o Emmy - considerado o Oscar da indústria da televisão, o negócio nos Prémios de Excelência da Comunidade eo Premio Iberoamericano de Comunicación.'],
    [ABOUT_TEXT10 , 'Sports Coverage','Cobertura Esportiva'],
    [ABOUT_TEXT11 , 'The essence of Globo´s evolvement is its Sports coverage. The progress of its broadcasting expertise is acknowledged worldwide.','A essência da evolução da Globo é sua cobertura esportiva. O progresso da sua expertise de radiodifusão é reconhecido em todo o mundo.'],
    [ABOUT_TEXT12 , 'Our approach to sports appeals to a huge audience of the world´s largest international and domestic sporting events, such as “Brasileirão” – the major national soccer competition –, FIFA World Cup, Formula 1 and the Olympic Games.','Nossa abordagem esportiva abrange um público enorme e cobre os maiores eventos esportivos nacionais e internacionais do mundo, como "Brasileirão" - a maior competição nacional de futebol -, Copa do Mundo, a Fórmula 1 e os Jogos Olímpicos.'],
    [ABOUT_TEXT13 , 'Over the past 10 years, Globo has broadcast more than 800 events of 15 different Olympic modalities. Accordingly, more than any other network, Globo has held the rights to broadcast sports events in Brazil, in some cases, providing both production and broadcast services to the IOC and FIFA.','Nos últimos 10 anos, a Globo tem transmitido mais de 800 eventos de 15 diferentes modalidades Olímpicas. Assim, mais do que qualquer outra rede, a Globo manteve os direitos de transmissão de eventos esportivos no Brasil, em alguns casos, fornecendo tanto a produção e os serviços de transmissão para o COI e FIFA.'],
    [CONTACT_CONTACT , 'Contact','Contato'],
    [CONTENT_CONTENT , 'Content','Conteúdo'],
    [CONTENT_CONTENT_REQUEST , 'Content Request','Solicitar Conteúdo'],
    [CONTENT_CONTENT_MENU_ARCHIVE , 'ARCHIVE','ARQUIVO'],
    [CONTENT_CONTENT_MENU_COMPILATIONS , 'COMPILATIONS','COLETÂNEA'],
    [CONTENT_CONTENT_MENU_HARD_NEWS , 'HARD NEWS','HARD NEWS'],
    [CONTENT_CONTENT_LIST_VIEW , 'List View','Visão em Lista'],
    [CONTENT_CONTENT_GRID_VIEW , 'Grid View','Visão em Grid'],
    [CONTENT_PRESENTATION_CONTENT , 'Content','Conteúdo'],
    [CONTENT_PRESENTATION_TEXT1 , 'With offices and affiliated companies in all 26 Brazilian states and the Federal District, NewSource Globo is ready to deliver fast-paced news that is displayed on-screen throughout this immense country. Usually used in reference to general news, hard news are stories that often deal with topics like national news, politics, riots, business and others.','Com escritórios e empresas afiliadas em todos os 26 estados brasileiros e no Distrito Federal, a NewSource Globo está pronta para entregar notícias rápidas que são exibidas nas telas de todo este imenso país. Normalmente usando como referência, notícias gerais, hard news são histórias que muitas vezes lidam com temas como notícias nacionais, política, motins, negócios e outros.'],
    [CONTENT_PRESENTATION_SHOW_ALL , 'Show all','Mostrar Todos'],
    [CONTENT_PRESENTATION_MORE , 'More', 'Mais'],
    [CONTENT_PRESENTATION_MENU_ARCHIVE , 'ARCHIVE','ARQUIVO'],
    [CONTENT_PRESENTATION_MENU_HARD_NEWS , 'HARD NEWS','HARD NEWS'],
    [CONTENT_PRESENTATION_MENU_COMPILATIONS , 'COMPILATIONS','COLETÂNEA'],
    [EVENTS_EVENTS , 'Events','Eventos'],
    [EVENTS_TEXT1 , 'world youth day','Jornada Mundial da Juventude'],
    [EVENTS_TEXT2 , 'july 23-28, 2013','23 a 28 Julho de 2013'],
    [EVENTS_TEXT3 , 'rio de janeiro', 'Rio de Janeiro'],
    [EVENTS_TEXT4 , 'The Host Broadcaster will offer bookable assigned and unassigned workspace for television and radio, shared wifi, cable tv, play out and live stand-up facilities. The backdrop for the IBC live stand-up positions is the Copacabana beach.','O serviço de Host Broadcaster irá oferecer espaços de trabalho que poderão ser reservados para televisão e rádio, com wi-fi compartilhada, tv a cabo, play out e posições de transmissão ao vivo. A Praia de Copacabana serve de pano de fundo para as posições de transmissão ao vivo a partir do IBC.'],
    [EVENTS_TEXT5 , 'A bookable single-camera studio facility will also be available at the International Broadcast Center for interviews with officials.','A reserva de uma instalação de estúdio com uma única câmera também estará disponível no Centro Internacional de Transmissão para realização de entrevistas.'],
    [EVENTS_TEXT6 , 'Host Broadcaster pool will be available at the IBC in 16:9 in the following formats with natural audio (embedded): HD1080i 50Hz, HD 1080i 60Hz, SD 50Hz, SD 60Hz.','Um pool de Broadcast estará disponível no IBC em 16:9 nos seguintes formatos com áudio natural (embedded): HD1080i 50Hz, HD 1080i 60Hz, SD 50Hz, SD 60Hz.'],
    [EVENTS_TEXT7 , 'Access to Associated Press video, International Agency Pool and World Youth Day programming.','Acesso à Associated Press vídeo, agência responsável pelo Pool Internacional e pela programação diária da Jornada Mundial da Juventude.'],
    [EVENTS_TEXT8 , 'The event organisers will provide a multiple language translation service for monitoring purporses via the internal RF system.','Os organizadores do evento irão proporcionar um serviço de tradução em diversos idiomas para fins de monitoração no sistema interno de RF.'],
    [EVENTS_TEXT9 , 'Dedicated internet bandwidth will be available upon request.','Uma conexão dedicada de internet estará disponível, mediante solicitação prévia'],
    [EVENTS_TEXT10 , 'Please note:','Por favor, atenção:'],
    [EVENTS_TEXT11 , 'Power at the IBC is 220V/60Hz. Brazilian plug adaptors will be necessary.','A energia elétrica no IBC é 220V/60Hz. Serão necessários adaptadores elétricos no padrão brasileiro.'],
    [EVENTS_TEXT12 , 'ISDN circuits are not availble in Brazil.','Circuitos ISDN não estão disponíveis no Brasil.'],
    [EVENTS_TEXT13 , 'Daily briefings, editorial services and information, shared computers with internet and a lounge will be available at the IBC.','Briefings diários, serviços editoriais e de informação, computadores compartilhados com internet e um lounge, estarão disponíveis no IBC.'],
    [EVENTS_TEXT14 , 'More Information','Mais Informações'],
    [EVENTS_TEXT15 , 'confederations cup','Copa das Confederações'],
    [EVENTS_TEXT16 , 'june 15-30, 2013','15 a 30 de Junho de 2013'],
    [EVENTS_TEXT17 , 'multiple locations','Várias localidades'],
    [EVENTS_TEXT18 , 'NewSource Globo, in cooperation with AP Global Media Services offered broadcast facilities from multiple locations in Brazil, overlooking the Confederations Cup stadiums.','A NewSource Globo, em parceria com a  AP Global Midia, ofereceu instalações de transmissão em vários locais no Brasil, com vista para os estádios da Copa das Confederações.'],
    [EVENTS_TEXT19 , 'The final game took place at the Maracana stadium in Rio de Janeiro. We provided facilities from a rooftop position overlooking Maracana and from a street level location on Copacabana beach.','O jogo final aconteceu no estádio do Maracanã, no Rio de Janeiro. Nós fornecemos instalações de uma posição com vista superior do Maracanã e de um local no nível da rua na praia de Copacabana.'],
    [EVENTS_TEXT20 , 'The stand-up positions were outside the security perimeter and no credentials were required. The feed points were available for both rights holders and non-right holders.','As posições de stand-up estavam fora do perímetro de segurança e nenhuma credencial foi exigidas. Os pontos de feed estavam disponíveis para ambos os detentores e não detentores de direitos de transmissão.'],
    [EVENTS_TEXT21 , 'More Information','Mais Informações'],
    [EVENTS_TEXT22 , 'Partners','Parceiros'],
    [EVENTS_TEXT23 , 'The FIFA 2013 Confederations Cup, World Youth Day','Copa das Confederações FIFA 2013, Jornada Mundial da Juventude'],
    [FACILITIES_FACILITIES , 'Facilities','Instalações'],
    [FACILITIES_TEXT1 , 'stand-up','stand-up'],
    [FACILITIES_TEXT2 , 'No other element of a TV news story is more important to a Broadcaster than a “Stand-Up”. At the end of the day, that is the portion of the story where they go live in the scene. The right location and position are key elements here. Our experience in breaking news coverage and our infrastructure throughout Brazil mean we can be on the ground right away while the stories are developing; ready to help broadcasters transmit the news to their country.','Nenhum outro elemento de notícias é mais importante para uma emissora que um "Stand-Up". No final do dia, essa é a parte da estória que vai ao vivo. A localização e posição correta são elementos-chave aqui. Nossa experiência na cobertura de notícias e nossa infra-estrutura em todo o Brasil significa que podemos estar no local imediatamente, enquanto as histórias estão se desenvolvendo; pronto para ajudar as emissoras transmitir a notícia ao seus países.'],
    [FACILITIES_TEXT3 , 'studios','estúdios'],
    [FACILITIES_TEXT4 , 'To help broadcasters deliver the news with high standard quality, we offer Globo´s glass studios in the two main Brazilian cities, São Paulo and Rio de Janeiro. They have easily identifiable backdrops that instantly reveal the city or region. During the worldwide famous Brazilian Carnival Parade at the Sambadrome, in Rio de Janeiro, a glass studio will be installed in order to attend to international needs.','Para ajudar a emissoras a entregar a notícia com alto padrão de qualidade, oferecemos glass studios da Globo nas duas principais cidades brasileiras, São Paulo e Rio de Janeiro. Eles têm cenários facilmente identificáveis ​​que revelam instantaneamente a cidade ou região. Durante o mundialmente famoso desfile de Carnaval brasileiro, no Sambódromo, no Rio de Janeiro, um estúdio de vidro será instalado, a fim de atender às necessidades internacionais.'],
    [FACILITIES_TEXT5 , 'play out','play out'],
    [FACILITIES_TEXT6 , 'We offer a variety of facilities to make the delivery of content to broadcasters’ audience easier.','Nós oferecemos uma variedade de instalações para tornar mais fácil a entrega do conteúdo para o público das emissoras.'],
    [FACILITIES_TEXT7 , 'other services','outros serviços'],
    [FACILITIES_TEXT8 , 'Each client has specific requirements. NewSource Globo is ready to attend to all of those needs with OB vans, SNG and Consulting. Wherever you are working in Brazil, we can provide all of the necessary support you need.','Cada cliente tem necessidades específicas. A NewSource Globo está pronta para atender a todas essas necessidades com UMs, SNG e Consultoria. Onde quer que você esteja trabalhando no Brasil, nós podemos fornecer todo o suporte necessário que você precisa.'],
    [FOOTER_HOME , 'Home', 'Home'],
    [FOOTER_EVENTS , 'Events','Eventos'],
    [FOOTER_FACILITIES , 'Facilities','Instalações'],
    [FOOTER_CONTENT , 'Content','Conteúdo'],
    [FOOTER_ABOUT , 'About','Sobre'],
    [FOOTER_CONTACT , 'Contact','Contato'],
    [PARTIAL_INDEX_TITLE , 'GLOBO\'S NEWS AND MEDIASERVICES AGENCY','AGÊNCIA DE NOTÍCIAS E SERVIÇOS DE MÍDIA GLOBO'],
    [PARTIAL_INDEX_MORE_INFORMATION , 'More Information','Mais Informações'],
];
         
        var csv = dados.map(function(linha){
            return linha.map(function(celula){
                return '"'+(celula.replace(/\"/g, '\"').replace(/\r/g, '\\r'))+'"';
            }).join(';');
        }).join('\n');
         
        console.log(csv);

        fs.writeFile('translate.csv', csv, function(err){
            if (err) throw err;
            console.log('It\'s saved!');
        });

    });



};
