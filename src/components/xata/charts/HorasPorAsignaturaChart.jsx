import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import {
   TitleComponent,
   TooltipComponent,
   LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { useEffect, useRef } from 'react'

// Registramos los componentes necesarios
echarts.use([
   TitleComponent,
   TooltipComponent,
   LegendComponent,
   PieChart,
   CanvasRenderer,
])

export const HorasPorAsignaturasChart = ({ intensidadesHorarias }) => {
   const chartRef = useRef(null)
   console.log(intensidadesHorarias)
   useEffect(() => {
      if (intensidadesHorarias.length > 0) {
         const myChart = echarts.init(chartRef.current)

         const data = intensidadesHorarias.map((asignatura) => ({
            name: asignatura.asignaturaNombre.asignatura_nombre,
            value: asignatura.intensidadHoraria,
         }))

         const option = {
            title: {
               text: 'Intensidad horaria por asignatura',
               left: 'center',
            },
            tooltip: {
               trigger: 'item',
               formatter: '{b}: {c} ({d}%)',
            },
            series: [
               {
                  name: 'Datos',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '50%'],
                  data: data,
                  emphasis: {
                     itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                     },
                  },
               },
            ],
         }

         myChart.setOption(option)
      }
   }, [intensidadesHorarias])

   return <div ref={chartRef} style={{ width: '500px', height: '500px' }}></div>
}
