import { useTranslation } from 'react-i18next';

export const equipments = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      serie: 'Falcon Series',
      title: 'Falcon 4',
      images: [
        '/images/falcon4/1.jpg',
        '/images/falcon4/2.jpg',
        '/images/falcon4/3.jpg',
        '/images/falcon4/4.jpg',
      ],
      characteristics: [
        {
          title: t('equipmentPage.body'),
          subtitle: [
            t('equipmentPage.construction'),
            t('equipmentPage.panels'),
          ],
        },
        {
          title: t('equipmentPage.firefighting'),
          subtitle: [
            t('equipmentPage.system'),
            t('equipmentPage.roofMonitor'),
            t('equipmentPage.roofBumber'),
            t('equipmentPage.coil'),
            t('equipmentPage.sideLines'),
            t('equipmentPage.injectors'),
            t('equipmentPage.irrigationSystem'),
            t('equipmentPage.pipeline'),
            t('equipmentPage.dcp'),
          ],
        },
        {
          title: t('equipmentPage.electricalSystem'),
          subtitle: [
            t('equipmentPage.controller'),
            t('equipmentPage.sensorPanels'),
            t('equipmentPage.runningLights'),
            t('equipmentPage.signalLights'),
            t('equipmentPage.cabinetLighting'),
            t('equipmentPage.incident'),
            t('equipmentPage.conn'),
          ],
        },
      ],
      specifications: [
        {
          title: t('equipmentPage.drive'),
          value: '4x4',
        },
        {
          title: t('equipmentPage.waterTank'),
          value: t('equipmentPage.upto6000'),
        },
        {
          title: t('equipmentPage.foamTank'),
          value: t('equipmentPage.upto720'),
        },
        {
          title: t('equipmentPage.pump'),
          value: t('equipmentPage.performance'),
        },
        {
          title: t('equipmentPage.gvw'),
          value: t('equipmentPage.upto26'),
        },
      ],
    },
    {
      id: 2,
      serie: 'Falcon Series',
      title: 'Falcon 6',
      images: [
        '/images/falcon6/1.jpg',
        '/images/falcon6/2.jpg',
        '/images/falcon6/3.jpg',
      ],
      characteristics: [
        {
          title: t('equipmentPage.body'),
          subtitle: [
            t('equipmentPage.construction'),
            t('equipmentPage.panels'),
          ],
        },
        {
          title: t('equipmentPage.firefighting'),
          subtitle: [
            t('equipmentPage.system'),
            t('equipmentPage.roofMonitor'),
            t('equipmentPage.roofBumber'),
            t('equipmentPage.coil'),
            t('equipmentPage.sideLines'),
            t('equipmentPage.injectors'),
            t('equipmentPage.irrigationSystem'),
            t('equipmentPage.pipeline'),
            t('equipmentPage.dcp'),
          ],
        },
        {
          title: t('equipmentPage.electricalSystem'),
          subtitle: [
            t('equipmentPage.controller'),
            t('equipmentPage.sensorPanels'),
            t('equipmentPage.runningLights'),
            t('equipmentPage.signalLights'),
            t('equipmentPage.cabinetLighting'),
            t('equipmentPage.incident'),
            t('equipmentPage.conn'),
          ],
        },
      ],
      specifications: [
        {
          title: t('equipmentPage.drive'),
          value: '6х6',
        },
        {
          title: t('equipmentPage.waterTank'),
          value: t('equipmentPage.upto12500'),
        },
        {
          title: t('equipmentPage.foamTank'),
          value: t('equipmentPage.upto1500'),
        },
        {
          title: t('equipmentPage.pump'),
          value: t('equipmentPage.performance'),
        },
        {
          title: t('equipmentPage.gvw'),
          value: t('equipmentPage.upto39'),
        },
      ],
      note: t('equipmentPage.falcon6note'),
    },
    {
      id: 3,
      serie: 'Falcon Series',
      title: 'Falcon 8',
      images: [
        '/images/falcon8/1.jpg',
        '/images/falcon8/2.jpg',
        '/images/falcon8/3.jpg',
        '/images/falcon8/4.jpg',
        '/images/falcon8/5.jpg',
        '/images/falcon8/6.jpg',
        '/images/falcon8/7.jpg',
        '/images/falcon8/8.jpg',
        '/images/falcon8/9.jpg',
        '/images/falcon8/10.jpg',
        '/images/falcon8/11.jpg',
      ],
      characteristics: [
        {
          title: t('equipmentPage.body'),
          subtitle: [
            t('equipmentPage.construction'),
            t('equipmentPage.panels'),
          ],
        },
        {
          title: t('equipmentPage.firefighting'),
          subtitle: [
            t('equipmentPage.system'),
            t('equipmentPage.roofMonitor'),
            t('equipmentPage.roofBumber'),
            t('equipmentPage.coil'),
            t('equipmentPage.sideLines'),
            t('equipmentPage.injectors'),
            t('equipmentPage.irrigationSystem'),
            t('equipmentPage.pipeline'),
            t('equipmentPage.dcp'),
          ],
        },
        {
          title: t('equipmentPage.electricalSystem'),
          subtitle: [
            t('equipmentPage.controller'),
            t('equipmentPage.sensorPanels'),
            t('equipmentPage.runningLights'),
            t('equipmentPage.signalLights'),
            t('equipmentPage.cabinetLighting'),
            t('equipmentPage.incident'),
            t('equipmentPage.conn'),
          ],
        },
      ],
      specifications: [
        {
          title: t('equipmentPage.drive'),
          value: '8х8',
        },
        {
          title: t('equipmentPage.waterTank'),
          value: t('equipmentPage.upto16000'),
        },
        {
          title: t('equipmentPage.foamTank'),
          value: t('equipmentPage.upto1920'),
        },
        {
          title: t('equipmentPage.pump'),
          value: t('equipmentPage.performance'),
        },
        {
          title: t('equipmentPage.gvw'),
          value: t('equipmentPage.upto52'),
        },
      ],
      note: t('equipmentPage.falcon8note'),
    },
    {
      id: 4,
      serie: 'ARFF Series',
      title: 'ARFF Commercial 4*4',
      images: ['/images/arff4/1.jpg'],
      characteristics: [
        {
          title: t('equipmentPage.body'),
          subtitle: [t('equipmentPage.body6061')],
        },
        {
          title: t('equipmentPage.firefighting'),
          subtitle: [
            t('equipmentPage.pump10000'),
            t('equipmentPage.system'),
            t('equipmentPage.roofMonitor'),
            t('equipmentPage.roofBumber'),
            t('equipmentPage.coil'),
            t('equipmentPage.sideLines'),
            t('equipmentPage.injectors'),
            t('equipmentPage.irrigationSystem'),
            t('equipmentPage.pipeline'),
            t('equipmentPage.dcp'),
          ],
        },
        {
          title: t('equipmentPage.electricalSystem'),
          subtitle: [
            t('equipmentPage.controller'),
            t('equipmentPage.sensorPanels'),
            t('equipmentPage.runningLights'),
            t('equipmentPage.signalLights'),
            t('equipmentPage.cabinetLighting'),
            t('equipmentPage.incident'),
            t('equipmentPage.conn'),
          ],
        },
      ],
      specifications: [
        {
          title: t('equipmentPage.drive'),
          value: '4x4',
        },
        {
          title: t('equipmentPage.waterTank'),
          value: t('equipmentPage.upto4000'),
        },
        {
          title: t('equipmentPage.foamTank'),
          value: t('equipmentPage.upto480'),
        },
        {
          title: t('equipmentPage.pump'),
          value: t('equipmentPage.performance'),
        },
        {
          title: t('equipmentPage.gvw'),
          value: t('equipmentPage.upto22'),
        },
      ],
    },
    {
      id: 5,
      serie: 'ARFF Series',
      title: 'ARFF Commercial 6х6',
      images: [
        '/images/arff6/1.jpg',
        '/images/arff6/2.jpg',
        '/images/arff6/3.jpg',
        '/images/arff6/4.jpg',
        '/images/arff6/5.jpg',
      ],
      characteristics: [
        {
          title: t('equipmentPage.body'),
          subtitle: [t('equipmentPage.body6061')],
        },
        {
          title: t('equipmentPage.firefighting'),
          subtitle: [
            t('equipmentPage.system'),
            t('equipmentPage.roofMonitor'),
            t('equipmentPage.roofBumber'),
            t('equipmentPage.coil'),
            t('equipmentPage.sideLines'),
            t('equipmentPage.injectors'),
            t('equipmentPage.irrigationSystem'),
            t('equipmentPage.pipeline'),
            t('equipmentPage.dcp'),
          ],
        },
        {
          title: t('equipmentPage.electricalSystem'),
          subtitle: [
            t('equipmentPage.controller'),
            t('equipmentPage.sensorPanels'),
            t('equipmentPage.runningLights'),
            t('equipmentPage.signalLights'),
            t('equipmentPage.cabinetLighting'),
            t('equipmentPage.incident'),
            t('equipmentPage.conn'),
          ],
        },
      ],
      specifications: [
        {
          title: t('equipmentPage.drive'),
          value: '6x6',
        },
        {
          title: t('equipmentPage.waterTank'),
          value: t('equipmentPage.upto7000'),
        },
        {
          title: t('equipmentPage.foamTank'),
          value: t('equipmentPage.upto1000'),
        },
        {
          title: t('equipmentPage.pump'),
          value: t('equipmentPage.performance'),
        },
        {
          title: t('equipmentPage.gvw'),
          value: t('equipmentPage.upto30'),
        },
      ],
    },
  ];
};
