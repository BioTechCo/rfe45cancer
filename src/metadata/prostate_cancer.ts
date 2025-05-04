import { PostData } from '@/types';

export const metadata: PostData = {
  title: 'RFE on Porstate Cancer Dataset',
  date: '2025-05-01',
  excerpt: 'Analysis of the Breast Cancer dataset using Recursive Feature Elimination (RFE).',
  volcano_plot: '/breast/vp_TCGA_BRCA.png',
  pca1: '/breast/planA/TCGA_BRCA_20250119/split80train/section_2/pca.html',
  pca2: '/breast/planA/GSE66313/split80train/section_2/pca.html',
  dbeta1: '/breast/planA/TCGA_BRCA_20250119/split80train/section_2/dbeta_TSS_0.33.csv',
  dbeta2: '/breast/planA/GSE66313/split80train/section_2/dbeta_TSS_0.26.csv',
  joined_dbeta: '/breast/planA/joined/section_2/dbeta_TSS_threshold_joined.csv',
  hc_ss: '/breast/planA/joined/section_5/hierarchical_clustering_simple_sum.png',
  hc_ws: '/breast/planA/joined/section_5/hierarchical_clustering_weighted_sum.png',
  hc_cs: '/breast/planA/joined/section_5/hierarchical_clustering_consensus.png',
  hc_comp: '/breast/planA/joined/section_5/hierarchical_clustering_compare.png',
  voting: '/breast/planA/joined/split20test/section_6/Voting_metrics.csv',
  voting_avg: '/breast/planA/joined/split20test/section_6/Voting_metrics_avg.csv',
};

export default metadata;
