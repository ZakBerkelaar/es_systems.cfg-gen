var info = '{"3do":{"name":"3do","extensions":".iso"},"amiga":{"name":"Amiga","extensions":".adf"},"amsradcpc":{"name":"Amstrad CPC","extensions":".dsk .cpc"},"apple2":{"name":"Apple II","extensions":".dsk"},"atari800":{"name":"Atari 800","extensions":""},"atari2600":{"name":"Atari 2600","extensions":".bin .a26 .rom"},"atari5200":{"name":"Atari 5200","extensions":"a52 .bas .bin .xex .atr .xfd .dcm .atr.gz .xfd.gz"},"atari7800":{"name":"Atari 7800","extensions":".a78 .bin"},"atarifalcon":{"name":"Atari Falcon","extensions":""},"atarijaguar":{"name":"Atari Jaguar","extensions":".j64 .jag"},"atarijaguarcd":{"name":"Atari Jaguar CD","extensions":""},"atarilynx":{"name":"Atari Lynx","extensions":".lnx"},"atarist":{"name":"Atari ST","extensions":""},"atarixe":{"name":"Atari XEGS","extensions":""},"c64":{"name":"Commodore 64","extensions":".crt .d64 .g64 .t64 .tap .x64"},"colecovision":{"name":"Colecovision","extensions":".bin .col .rom .zip"},"dreamcast":{"name":"Dreamcast","extensions":".cdi .gdi"},"famicon":{"name":"Family Computer Disk System","extensions":""},"fba":{"name":"FinalBurn Alpha","extensions":""},"gamegear":{"name":"Game Gear","extensions":".gg"},"gb":{"name":"Game Boy","extensions":".gb"},"gba":{"name":"Game Boy Advance","extensions":".gba"},"gbc":{"name":"Game Boy Color","extensions":".gbc"},"gc":{"name":"Game Cube","extensions":".iso"},"genesis":{"name":"Genesis","extensions":".smd .bin .md .iso"},"intellivision":{"name":"Intellivision","extensions":".int .bin"},"macintosh":{"name":"Macintosh","extensions":".img .rom"},"mame":{"name":"MAME","extensions":".zip"},"mastersystem":{"name":"Master System","extensions":".sms"},"megadrive":{"name":"Megadrive","extensions":".smd .bin .md .iso"},"msx":{"name":"MSX","extensions":".rom .mx1 .mx2 .col .dsk"},"n64":{"name":"Nintendo 64","extensions":".z64 .n64 .v64"},"nds":{"name":"Nintendo DS","extensions":".nds .bin"},"neogeo":{"name":"Neo Geo","extensions":".zip"},"neogeocd":{"name":"Neo Geo CD","extensions":""},"nes":{"name":"Nintendo Entertainment System","extensions":".zip .nes .smc .sfc .fig .swc .mgd"},"ngp":{"name":"Neo Geo Pocket","extensions":".ngp"},"ngpc":{"name":"Neo Geo Pocket Color","extensions":".ngc"},"odyssey2":{"name":"Magnavox Odyssey²","extensions":""},"pc":{"name":"PC","extensions":".com .sh .bat .exe"},"pcengine":{"name":"PC Engine","extensions":""},"ports":{"name":"Ports","extensions":""},"ps2":{"name":"PlayStation 2","extensions":".iso .img .bin .mdf .z .z2 .bz2 .dump .cso .ima .gz"},"psp":{"name":"PSP","extensions":".bin .cue .cbn .img .iso .m3u .mdf .pbp .toc .z .znx"},"psx":{"name":"PSX","extensions":""},"saturn":{"name":"Saturn","extensions":""},"scummvm":{"name":"ScummVM","extensions":""},"sega32x":{"name":"Sega 32X","extensions":".32x .smd .bin .md"},"segacd":{"name":"Sega CD","extensions":".smd .bin .md .iso"},"sfc":{"name":"SFC","extensions":""},"snes":{"name":"Super Nintendo Entertainment System","extensions":".zip .smc .sfc .fig .swc"},"vectrex":{"name":"Vectrex","extensions":".vec .gam .bin"},"virtualboy":{"name":"Virtual Boy","extensions":".vb"},"wii":{"name":"Wii","extensions":".iso"},"wonderswancolor":{"name":"Wonderswan Color","extensions":".wsc"},"xbox":{"name":"Xbox","extensions":""},"zxspectrum":{"name":"ZX Spectrum","extensions":".sna .szx .z80 .tap .tzx .gz .udi .mgt .img .trd .scl .dsk"}}';

$(document).ready(function() {
  $("#createConstructs").click(function () {
    var infoJson = JSON.parse(info);
    $('#boxes').children('input').each(function(index) {
      if($(this).is(':checked')) {
        $('#constructors').append('<div id="'+$(this).attr("name")+'"><p><font size ="6">'+$(this).attr("name")+':'+'</font></p> Name: <input type="text" name="name" value="'+$(this).attr("name")+'"><br>Fullname: <input type="text" name="fullname" value="'+infoJson[$(this).attr("name")]["name"]+'"><br>Rom Path: <input type="text" name="path" class="textBox" value="'+$('#romPath').val()+$(this).attr("name")+'"><br>Extensions: <input type="text" name="extension" value="'+infoJson[$(this).attr("name")]["extensions"]+'"><br>Command: <input type="text" name="command" class="textBox" value="'+$('#emuPath').val()+$(this).attr("name")+'\\'+'EMULATOR.exe %ROM%'+'"><br>Platform: <input type="text" name="platform" value="'+$(this).attr("name")+'"><br>Theme: <input type="text" name="theme" value="'+$(this).attr("name")+'"><br></div>')
      }
    });
    $("body").append('<button type="button" id="createFile">Create File</button>');
    $("#createFile").click(function () {
      var file = "";
      file += "<systemList> ";
      $('#constructors').children().each(function(index) {

        file += "<system> ";

        file += "<name>";
        file += $(this).children('input[name="name"]').val();
        file += "</name> ";

        file += "<fullname>";
        file += $(this).children('input[name="fullname"]').val();
        file += "</fullname> ";

        file += "<path>";
        file += $(this).children('input[name="path"]').val();
        file += "</path> ";

        file += "<extension>";
        file += $(this).children('input[name="extension"]').val();
        file += "</extension> ";

        file += "<command>";
        file += $(this).children('input[name="command"]').val();
        file += "</command> ";

        file += "<platform>";
        file += $(this).children('input[name="platform"]').val();
        file += "</platform> ";

        file += "<theme>";
        file += $(this).children('input[name="theme"]').val();
        file += "</theme> ";

        file += "</system> ";

      });
      file += "</systemList>";
      var link = document.createElement('a');
      link.download = 'es_systems.cfg';
      var blob = new Blob([file], {type: 'text/plain'});
      link.href = window.URL.createObjectURL(blob);
      link.click();
    });
  });
});
