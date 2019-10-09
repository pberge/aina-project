<template>
    <div>
        <ul class="timeline">
            <TimelineItem v-for="(item, i) in items" :key="i"
                :title="item.title"
                :text="item.text"
                :year="item.year"
                :index="i" />
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TimelineItem from './TimelineItem.vue'

@Component({
    components: {
        TimelineItem
    }
})
export default class Timeline extends Vue {
    items: any[] = [
        { title: 'history.1976-title', year: '1976', text: 'history.1976-text' },
        { title: 'history.1977-title', year: '1977', text: 'history.1977-text' },
        { title: 'history.1978-title', year: '1978', text: 'history.1978-text' },
        { title: "history.1979-title", year: '1979', text: 'history.1979-text' },
        { title: "history.1980-title", year: "1980", text: "history.1980-text" },
        { title: "history.1981-title", year: "1981", text: "history.1981-text" },
        { title: "history.1982-title", year: "1982", text: "history.1982-text" },
        { title: "history.1983-title", year: "1983", text: "history.1983-text" },
        { title: "history.1984-title", year: "1984", text: "history.1984-text" },
        { title: "history.1985-title", year: "1985", text: "history.1985-text" },
        { title: "history.1986-title", year: "1986", text: "history.1986-text" },
        { title: "history.1987-title", year: "1987", text: "history.1987-text" },
        { title: "history.1988-title", year: "1988", text: "history.1988-text" },
        { title: "history.1989-title", year: "1989", text: "history.1989-text" },
        { title: "history.1990-title", year: "1990", text: "history.1990-text" },
        { title: "history.1991-title", year: "1991", text: "history.1991-text" },
        { title: "history.1992-title", year: "1992", text: "history.1992-text" },
        { title: "history.1993-title", year: "1993", text: "history.1993-text" },
        { title: "history.1995-title", year: "1995", text: "history.1995-text" },
        { title: "history.1996-title", year: "1996", text: "history.1996-text" },
        { title: "history.1997-title", year: "1997", text: "history.1997-text" },
        { title: "history.1998-title", year: "1998", text: "history.1998-text" },
        { title: "history.1999-title", year: "1999", text: "history.1999-text" },
        { title: "history.2000-title", year: "2000", text: "history.2000-text" },
        { title: "history.2001-title", year: "2001", text: "history.2001-text" },
        { title: "history.2002-title", year: "2002", text: "history.2002-text" },
        { title: "history.2003-title", year: "2003", text: "history.2003-text" },
        { title: "history.2004-title", year: "2004", text: "history.2004-text" },
        { title: "history.2005-title", year: "2005", text: "history.2005-text" },
        { title: "history.2006-title", year: "2006", text: "history.2006-text" },
        { title: "history.2007-title", year: "2007", text: "history.2007-text" },
        { title: "history.2008-title", year: "2008", text: "history.2008-text" },
        { title: "history.2009-title", year: "2009", text: "history.2009-text" },
        { title: "history.2010-title", year: "2010", text: "history.2010-text" },
        { title: "history.2011-title", year: "2011", text: "history.2011-text" },
        { title: "history.2012-title", year: "2012", text: "history.2012-text" },
        { title: "history.2013-title", year: "2013", text: "history.2013-text" },
        { title: "history.2014-title", year: "2014", text: "history.2014-text" },
        { title: "history.2015-title", year: "2015", text: "history.2015-text" },
        { title: "history.2016-title", year: "2016", text: "history.2016-text" },
        { title: "history.2017-title", year: "2017", text: "history.2017-text" },
        { title: "history.2018-title", year: "2018", text: "history.2018-text" },
        { title: "history.2019-title", year: "2019", text: "history.2019-text" },
    ]
}
</script>

<style>

.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: rgb(213,213,213);
  background: -moz-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
  background: -webkit-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -o-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -ms-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: linear-gradient(to bottom, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  z-index: 4;
}

.timeline li {
  padding: 1.5em 0;
}

.timeline .hexa{
  width: 16px;
  height: 10px;
  position: absolute;
  background: var(--main-color);
  z-index: 4;
  left: 0;
  right: 0;
  margin-left:auto;
  margin-right:auto;
  top: -30px;
  margin-top: 0;
}

.timeline .hexa:before {
  border-bottom: 4px solid var(--main-color);
  border-left-width: 8px;
  border-right-width: 8px;
  top: -4px;
}

.timeline .hexa:after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 4px solid var(--main-color);
  bottom: -4px;
}



@media(min-width: 768px){
  .timeline {
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  
  .timeline .hexa {
    left: -28px;
    right: auto;
    top: 8px;
  }

  .timeline .direction-l .hexa {
    left: auto;
    right: -28px;
  }

  
}

@media(min-width: 992px){
  .timeline {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }
}

@media (max-width: 740px) { /*MOBILE*/
  

}

</style>
