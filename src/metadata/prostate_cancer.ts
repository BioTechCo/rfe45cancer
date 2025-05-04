import { PostData } from '@/types';

export const metadata: PostData = {
  title: 'RFE on Prostate Cancer Dataset',
  date: '2025-05-01',
  excerpt: 'Analysis of the Prostate Cancer dataset using Recursive Feature Elimination (RFE).',
  volcano_plot: '/prostate/vp_TCGA_PRAD.png',
  pca1: '/prostate/planA/GDC_prostate_tissue/split80train/section_2/pca.html',
  pca2: '/prostate/planA/GSE269244/split80train/section_2/pca.html',
  joined_dbeta: '/prostate/planA/joined/section_2/dbeta_TSS_threshold_joined.csv',
  hc_ss: '/prostate/planA/joined/section_5/hierarchical_clustering_simple_sum.png',
  hc_ws: '/prostate/planA/joined/section_5/hierarchical_clustering_weighted_sum.png',
  hc_cs: '/prostate/planA/joined/section_5/hierarchical_clustering_consensus.png',
  hc_comp: '/prostate/planA/joined/section_5/hierarchical_clustering_compare.png',
  voting: '/prostate/planA/joined/split20test/section_6/Voting_metrics.csv',
  voting_avg: '/prostate/planA/joined/split20test/section_6/Voting_metrics_avg.csv',
};

export default metadata;
