<template>
    <div>
        <div class="d-flex flex-column pb-6" style="width: 100%;">
            <v-container class="d-flex flex-column align-center">
                <h1 data-aos="fade-up" data-aos-duration="500">Skills</h1>

                <v-row
                    justify="center"
                    class="pt-6"
                    data-aos="fade-right"
                    data-aos-duration="800"
                >
                    <v-chip
                        color="#1a1a1a"
                        label
                        outlined
                        class="mr-4 pa-4 mb-6"
                        v-for="web in skills.web"
                        :key="web.icon"
                    >
                        <v-icon left>{{ web.icon }}</v-icon>
                        {{ web.desc }}
                    </v-chip>
                </v-row>
                <v-row justify="center" data-aos="fade-left">
                    <v-chip
                        color="#1a1a1a"
                        label
                        outlined
                        class="mr-4 pa-4 mb-6"
                        v-for="design in skills.design"
                        :key="design.icon"
                    >
                        <v-icon left>{{ design.icon }}</v-icon>
                        {{ design.desc }}
                    </v-chip>
                </v-row>
                <v-row
                    justify="center"
                    data-aos="fade-right"
                    data-aos-duration="800"
                >
                    <v-chip
                        color="#1a1a1a"
                        label
                        outlined
                        class="mr-4 pa-4 mb-6"
                        v-for="code in skills.code"
                        :key="code.icon"
                    >
                        <v-icon left>{{ code.icon }}</v-icon>
                        {{ code.desc }}
                    </v-chip>
                </v-row>
                <v-row justify="center" data-aos="fade-left">
                    <v-chip
                        color="#1a1a1a"
                        label
                        outlined
                        class="mr-4 pa-4 mb-6"
                        v-for="databases in skills.databases"
                        :key="databases.icon"
                    >
                        <v-icon left>{{ databases.icon }}</v-icon>
                        {{ databases.desc }}
                    </v-chip>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    data: () => ({
        skills: {
            web: [
                { icon: 'mdi-react', desc: 'ReactJS' },
                { icon: 'mdi-vuejs', desc: 'VueJS' },
                { icon: 'mdi-nodejs', desc: 'ExpressJS (Node)' },
                { icon: 'mdi-language-csharp', desc: '.NET Core' },
            ],
            design: [
                { icon: 'mdi-language-html5', desc: 'HTML5' },
                { icon: 'mdi-language-css3', desc: 'CSS3' },
                { icon: 'mdi-bootstrap', desc: 'Boostrap' },
                { icon: 'mdi-material-ui', desc: 'MaterialUI' },
                { icon: 'mdi-adobe', desc: 'Adobe Suite' },
            ],

            databases: [
                { icon: 'mdi-database', desc: 'SQL (MySQL)' },
                { icon: 'mdi-database', desc: 'NoSQL (MongoDB)' },
            ],

            code: [
                { icon: 'mdi-language-java', desc: 'Java' },
                { icon: 'mdi-language-python', desc: 'Python3' },
                { icon: 'mdi-language-c', desc: 'C99' },
            ],
        },
    }),
};
</script>

<style>
#future {
    display: inline-block;
}
#future li {
    list-style-type: none;
    text-align: start;
}
</style>
