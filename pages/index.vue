<template>
  <div class="MainPage">
    <page-header :icon="headerItem.icon" :title="headerItem.title" :date="headerItem.date" />
    <whats-new class="mb-4" :items="newsItems" />
    <v-row class="DataBlock">
      <confirmed-cases-details-card
        :source-url="'http://www.pref.nara.jp/55168.htm'"
        :source-text="'奈良県のオープンデータを利用'"
      />
      <!-- <v-col cols="12" md="6" class="DataCard">
        <svg-card
          title="検査陽性者の状況"
          :title-id="'details-of-confirmed-cases'"
          :date="Data.main_summary.date"
        >
          <confirmed-cases-table
            aria-label="検査陽性者の状況"
            v-bind="confirmedCases"
          />
        </svg-card>
      </v-col> -->
      <patients-status
        :source-url="'http://www.pref.nara.jp/55168.htm'"
        :source-text="'奈良県のオープンデータを利用'"
        :date="Data.sickbeds_summary.date"
      />
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="陽性者数"
          :title-id="'number-of-confirmed-cases'"
          :chart-id="'time-bar-chart-patients'"
          :chart-data="patientsGraph"
          :date="Data.patients_summary.date"
          :unit="'人'"
          :url="'http://www.pref.nara.jp/'"
          :source-url="'http://www.pref.nara.jp/55168.htm'"
          :source-text="'奈良県のオープンデータを利用'"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :title="'陽性者の属性'"
          :title-id="'attributes-of-confirmed-cases'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="Data.patients.date"
          :info="sumInfoOfPatients"
          :url="'http://www.pref.nara.jp/'"
          :source-url="'http://www.pref.nara.jp/55168.htm'"
          :source-text="'奈良県のオープンデータを利用'"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="PCR等検査実施数"
          :title-id="'number-of-tested'"
          :chart-id="'time-bar-chart-inspections'"
          :chart-data="inspectionsGraph"
          :date="Data.inspections.date"
          :unit="'件'"
          :source-url="'http://www.pref.nara.jp/55168.htm'"
          :source-text="'奈良県のオープンデータを利用'"
        />
      </v-col>

      <v-col cols="12" md="6" class="DataCard">
        <inspection-persons-chart
          :date="Data.inspection_persons_summary.date"
          :daily-data="Data.inspection_persons_summary.data"
          :source-url="'http://www.pref.nara.jp/55168.htm'"
          :source-text="'奈良県のオープンデータを利用'"
        />
      </v-col>

      <!--
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="新型コロナコールセンター相談件数"
          :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
          :chart-id="'time-bar-chart-contacts'"
          :chart-data="contactsGraph"
          :date="Data.contacts.date"
          :unit="'件'"
          :url="''"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="新型コロナ受診相談窓口相談件数"
          :title-id="'number-of-reports-to-covid19-consultation-desk'"
          :chart-id="'time-bar-chart-querents'"
          :chart-data="querentsGraph"
          :date="Data.querents.date"
          :unit="'件'"
          :url="''"
        />
      </v-col>
      -->
      <patients-and-sickbeds
        :source-url="'http://www.pref.nara.jp/55168.htm'"
        :source-text="'奈良県のオープンデータを利用'"
        :date="Data.sickbeds_summary.date"
      />
    </v-row>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
// import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
// import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import DataTable from '@/components/DataTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
// import formatConfirmedCases from '@/utils/formatConfirmedCases'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import News from '@/data/news.json'
//  svg chara table
// import SvgCard from '@/components/SvgCard.vue'
// import ConfirmedCasesTable from '@/components/ConfirmedCasesTable.vue'
import PatientsAndSickbeds from '@/components/cards/PatientsAndSickbeds.vue'
import PatientsStatus from '@/components/cards/PatientsStatus.vue'
import InspectionPersonsChart from '@/components/InspectionPersonsChart.vue'
// import weeklizer from '@/utils/weeklizer'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    //    TimeStackedBarChart,
    WhatsNew,
    //    StaticInfo,
    ConfirmedCasesDetailsCard,
    DataTable,
    // SvgCard,
    // ConfirmedCasesTable
    InspectionPersonsChart,
    PatientsAndSickbeds,
    PatientsStatus
  },
  data() {
    // 日次データを週次化
    // const dataWeekly = weeklizer(Data) // Data_weekly.json 化までのつなぎ

    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    // 感染者数
    const patientsTable = formatTable(Data.patients.data)
    // 退院者グラフ
    // const dischargesGraph = formatGraph(Data.discharges_summary.data)

    // 相談件数
    //  const contactsGraph = formatGraph(Data.contacts.data)

    // 相談件数
    //  const contactsGraph = formatGraph(Data.contacts.data)
    // 帰国者・接触者電話相談センター相談件数
    //  const querentsGraph = formatGraph(Data.querents.data)

    // 検査実施日別グラフ
    const inspectionsGraph = formatGraph(Data.inspections.data)
    // 検査実施日別グラフ
    // const inspectionsGraph = [
    //   Data.inspections_summary.data['県内'],
    //   Data.inspections_summary.data['その他']
    // ]
    // const inspectionsItems = [
    //  '県内発生（疑い例・接触者調査）',
    //  'その他（チャーター便・クルーズ便）'
    // ]
    // const inspectionsLabels = Data.inspections_summary.labels
    // 死亡者数
    // #MEMO: 今後使う可能性あるので一時コメントアウト
    // const fatalitiesTable = formatTable(
    //   Data.patients.data.filter(patient => patient['備考'] === '死亡')
    // )

    // 検査陽性者の状況
    /*    const confirmedCases = formatConfirmedCases(Data.main_summary)    */

    const sumInfoOfPatients = {
      lText: patientsGraph[patientsGraph.length - 1].cumulative.toLocaleString(),
      sText: dayjs(patientsGraph[patientsGraph.length - 1].label).format('M/D') + 'の累計',
      unit: '人'
    }

    const data = {
      Data,
      //  dataWeekly,
      patientsTable,
      patientsGraph,
      //  dischargesGraph,
      //  contactsGraph,
      //  querentsGraph,
      inspectionsGraph,
      // inspectionsItems,
      // inspectionsLabels,
      // confirmedCases,
      sumInfoOfPatients,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '奈良県内の最新感染動向',
        date: Data.lastUpdate
      },
      newsItems: News.newsItems
    }
    return data
  },
  head() {
    return {
      title: '奈良県内の最新感染動向'
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
