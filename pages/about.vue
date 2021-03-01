<template>
  <div>
    <Navbar class="bg-sunglow-300" />
    <div class="container mx-auto py-16 flex">
      <section class="w-1/3">
        <img src="~/assets/images/about.jpg" alt="about photo" class="w-full" />
      </section>
      <section class="md:ml-20">
        <p class="">*1991, Prague, Czech Republic</p>
        <div class="flex flex-col my-4">
          <p class="font-bold text-xl">education</p>
          <p>2011-2017</p>
          <p>
            Academy of Fine Arts in Prague (Jiří Sopko, Michael Rittstein,
            Robert Šalanda)
          </p>
          <p class="mt-2">2015</p>
          <p>Utrecht School of the Arts, Netherlands</p>
        </div>
        <div class="flex flex-col my-6">
          <p class="font-bold text-xl">exhibitions</p>
          <p class="text-lg">solo exhibitions</p>
          <p class="italic mt-2">2020</p>
          <p>
            Hned i zítra bude líp (with David Minařík), Pragovka Gallery,
            Prague, Czech Republic.
          </p>
          <p class="italic mt-2">2019</p>
          <p>
            370 dní slunečno (with Jan Heres), Jan Čejka Gallery, Prague, Czech
            Republic.
          </p>
          <p>Šmucik Ordnung, Stolen Gallery, Praha, Czech Republic.</p>
          <p>
            Armonico (with Jiří Dolinski), Galerie OFF/FORMÁT, Brno, Czech
            Republic.
          </p>
          <p class="italic mt-2">2014</p>
          <p>
            Mlčení Vaše se stalo mlčením naším, AVU Gallery, Prague, Czech
            Republic.
          </p>
          <p class="text-lg mt-6">group exhibitions</p>
          <p class="italic mt-2">2021</p>
          <p>
            Cena kritiky za mladou malbu - Galerie kritiků, Prague, Czech
            Republic.
          </p>
          <p class="italic mt-2">2019</p>
          <p>
            Leinemann Kunstpreis - Negative Realism, Czech Center, Berlin,
            Germany.
          </p>
          <p>Malba III, Millenium Gallery, Prague, Czech Republic.</p>
          <p class="italic mt-2">2017</p>
          <p>
            New Wave, diplomanti AVU 2017, National Gallery, Prague, Czech
            Republic.
          </p>
          <p>Krajina 2017, Nová Galerie, Prague, Czech Republic.</p>
          <p>Summeracademy Venedig, Pallazzo Zenobio, Venice, Italy.</p>
          <p>
            Scene for unwritten play (diploma exhibition), Akademie výtvarných
            umění, Prague, Czech Republic.
          </p>
          <p class="italic mt-2">2014</p>
          <p>
            Kunstpreis der Leinemann-Stiftung, Czech Center, Berlin, Germany.
          </p>
          <p>
            I passed by an apple tree, Nákladové nádraží Žižkov, Prague, Czech
            Republic.
          </p>
          <p class="italic mt-2">2013</p>
          <p>Výstava Sympozia Lukov, Topičův Klub, Prague, Czech Republic.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar,
  },
}
</script>
