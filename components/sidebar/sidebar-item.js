import GridViewIcon from '@mui/icons-material/GridView';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const CategoryItem = [
  {
    category: "Content Type",
    permalink: "content-type",
    icon: <GridViewIcon />,
  },
  {
    category: "Category List",
    permalink: "category-list",
    subCategory: ["Category list", "Other Module"],
    icon: <ArticleOutlinedIcon />,
  },
  {
    category: "Sub Category List",
    permalink: "category-list",
    icon: <DescriptionOutlinedIcon />,
  },
  {
    category: "Menu Category",
    permalink: "category-list",
    icon: <ViewListOutlinedIcon />,
  },
  {
    category: "Model Category",
    permalink: "category-list",
    icon: <BallotOutlinedIcon />,
  },
  {
    category: "Side Bar Item 01",
    permalink: "category-list",
    icon: <FormatListBulletedIcon />,
  },
  {
    category: "Side Bar Item 02",
    permalink: "category-list",
    icon: <FormatListBulletedIcon />,
  },
  {
    category: "Side Bar Item 03",
    permalink: "category-list",
    icon: "</>",
  },
];
