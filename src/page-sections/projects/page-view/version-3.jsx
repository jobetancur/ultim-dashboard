import Grid from '@mui/material/Grid';
// CUSTOM COMPONENTS
import StatusFilter from '../StatusFilter';
import SearchFilter from '../SearchFilter';
import ProjectForm from '../project-form';
import ProjectCard3 from '../project-card-3';
// CUSTOM DEFINED HOOK
import useProjects from '../useProjects';
export default function ProjectVersionThreePageView() {
  const {
    filters,
    openModal,
    FILTERED_PROJECTS,
    handleChangeFilter,
    handleCloseModal,
    handleOpenModal
  } = useProjects();
  return <div className="pt-2 pb-4">
      {/* PROJECT FILTER BY STATUS */}
      <StatusFilter value={filters.status} handleChange={value => handleChangeFilter('status', value)} />

      {/* SEARCH INPUT AND CREATE BUTTON */}
      <SearchFilter handleOpenModal={handleOpenModal} handleChange={value => handleChangeFilter('searchValue', value)} />

      {/* PROJECT CREATION MODAL */}
      <ProjectForm open={openModal} handleClose={handleCloseModal} />

      {/* PROJECT CARDS */}
      <Grid container spacing={3}>
        {FILTERED_PROJECTS.map(project => <Grid item xs={12} sm={6} lg={4} key={project.id}>
            <ProjectCard3 />
          </Grid>)}
      </Grid>
    </div>;
}