# emulationstation-es_systems-generator

This is a website hosted at https://mrslimedude.github.io/es_systems.cfg-gen/ that can quickly help people generate a es_systems.cfg file for use with emulationstation.

## How do i use it
1. Check the boxes for the emulators/consoles that you want to use in emulationstation.
2. Set the root rom path or leave it as default one, the name of checkbox will be appended to the end of the path. For example if the root path was ~\.emulationstation\roms\ and you had the snes box checked it would look for roms in ~\.emulationstation\roms\snes.
3. Set the root emulator path for the consoles this follows the same pathing as roms.
4. Click the "Create Constructors" button and then ensure that all of the text boxes are allready filled in with the correct information. If any of that information is missing you should beable to find it with a quick google search. You will also need to replace EMULATOR.exe with the executable file that you want to use and make sure that that command fits the emulators command syntax. %ROM% will be replaced with the direct path to the rom allready enclosed in quotes.
5. Click the "Create File" button and then save that file in "%HOMEPATH%\.emulationstation" on windows or "$HOME/.emulationstation" on linux. If it asks you to overwrite the existing file press yes and save the file.
6. Happy emulating.
