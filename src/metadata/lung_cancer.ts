import { PostData } from '@/types';

export const metadata: PostData = {
  title: 'RFE on Lung Cancer Dataset',
  date: '2025-05-01',
  excerpt: 'Analysis of the Lung Cancer dataset using Recursive Feature Elimination (RFE).',
  volcano_plot: '/lung/vp_TCGA_LUAD_LUSC.png',
  pca1: '/lung/planA/GDC_lung_tissue/split80train/section_2/pca.html',
  pca2: '/lung/planA/GSE235414/split80train/section_2/pca.html',
  joined_dbeta: '/lung/planA/joined/section_2/dbeta_TSS_threshold_joined.csv',
  hc_ss: '/lung/planA/joined/section_5/hierarchical_clustering_simple_sum.png',
  hc_ws: '/lung/planA/joined/section_5/hierarchical_clustering_weighted_sum.png',
  hc_cs: '/lung/planA/joined/section_5/hierarchical_clustering_consensus.png',
  hc_comp: '/lung/planA/joined/section_5/hierarchical_clustering_compare.png',
  voting: '/lung/planA/joined/split20test/section_6/Voting_metrics.csv',
  voting_avg: '/lung/planA/joined/split20test/section_6/Voting_metrics_avg.csv',
};

export default metadata;
