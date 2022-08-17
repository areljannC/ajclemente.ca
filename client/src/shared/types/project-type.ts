type ProjectType = {
  title?: string;
  description?: any;
  link?: string;
  tags?: Array<string>;
  duration?: {
    startDate?: string;
    endDate?: string;
    present?: boolean;
  };
  coverImage?: string;
};

export default ProjectType;
