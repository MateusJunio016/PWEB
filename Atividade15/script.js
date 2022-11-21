function confirmar(){
    confirmado = confirm("A janela contendo o curso deve realmente ser aberta?");
    if(!confirmado) return;

    cursos = document.getElementById("cursos");

    curso = cursos.selectedIndex;
 
    janelaExt = window.open("", "janela" + cursos.options[curso], "fullscreen=yes,width = 600, height = 300");
    janelaExt.document.write("<title>Página do Curso " + cursos.options[curso].text + "</title>");
    switch (curso) {
        case 1:
            janelaExt.document.writeln("<h1>Análise e Desenvolvimento de Sistemas</h2>");
            janelaExt.document.writeln("<p>Coordenação: Profº Antonio Cesar de Barros Munari</p>");
            janelaExt.document.writeln("<p>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.</p>");    
            break;
        case 2:
            janelaExt.document.writeln("<h1>Sistemas Biomédicos</h2>");
            janelaExt.document.writeln("<p>Coordenação: Profª Me. Joseli Vergara Marins</p>");
            janelaExt.document.writeln("<p>O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletro-médicos. Assessora a aquisição, executa a instalação, capacita usuários de equipamentos e sistemas biomédicos, além de participar de equipes de pesquisa aplicada. Responsável também pela implantação e controle das normas de segurança dos equipamentosnos serviços de saúde, pode atuar em hospitais, policlínicas, laboratórios, fabricantes e distribuidoras de equipamentos hospitalares.</p>");
            break;
        case 3:
            janelaExt.document.writeln("<h1>Logística</h2>");
            janelaExt.document.writeln("<p>Coordenação: Prof. Me. José Itamar Monteiro</p>");
            janelaExt.document.writeln("<p>O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos. Ele gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais, podendo ainda ocupar-se do inventário de estoques, sistemas de abastecimento, programação e monitoramento do fluxo de pedidos.</p>");    
            break;
        case 4:
            janelaExt.document.writeln("<h1>Polímeros</h2>");
            janelaExt.document.writeln("<p>Coordenação: Profª Ma. Cécile Chaves Hernandez Garcia</p>");
            janelaExt.document.writeln("<p>Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas de processos, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais para caracterização dos materiais poliméricos, além de processos de modelagem. O monitoramento da qualidade e dos processos de reciclagem envolvidos; a identificação e acompanhamento das variáveis relevantes, inclusive as referentes ao meio ambiente, são também funções desse profissional.</p>");
            break;
        case 5:
            janelaExt.document.writeln("<h1>Eletrônica Automotiva</h2>");
            janelaExt.document.writeln("<p>Coordenação: Profº Fernando César Miranda</p>");
            janelaExt.document.writeln("<p>O tecnólogo em Eletrônica Automotiva participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva; supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio; especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio; elabora orçamentos referentes à instrumentos e equipamentos usados na industria automotiva;</p>");    
            break;
    }
    


    

}