import { PostData } from '@/types';

export const metadata: PostData = {
  title: 'RFE on Rectal Cancer Dataset',
  date: '2025-05-01',
  excerpt: 'Analysis of the Rectal Cancer dataset using Recursive Feature Elimination (RFE).',
  volcano_plot: '/rectal/vp_TCGA_COAD.png',
  pca1: '/rectal/planA/GDC_rectal_tissue_450k/split80train/section_2/pca.html',
  pca2: '/rectal/planA/GSE199057/split80train/section_2/pca.html',
  joined_dbeta: '/rectal/planA/joined/section_2/dbeta_TSS_threshold_joined.csv',
  hc_ss: '/rectal/planA/joined/section_5/hierarchical_clustering_simple_sum.png',
  hc_ws: '/rectal/planA/joined/section_5/hierarchical_clustering_weighted_sum.png',
  hc_cs: '/rectal/planA/joined/section_5/hierarchical_clustering_consensus.png',
  hc_comp: '/rectal/planA/joined/section_5/hierarchical_clustering_compare.png',
  voting: '/rectal/planA/joined/split20test/section_6/Voting_metrics.csv',
  voting_avg: '/rectal/planA/joined/split20test/section_6/Voting_metrics_avg.csv',
};

export default metadata;
