import ckan.plugins as p
import ckan.plugins.toolkit as tk


class FiWareHeaderPlugin(p.SingletonPlugin):

    p.implements(p.IConfigurer)

    def update_config(self, config):
        # Add this plugin's templates dir to CKAN's extra_template_paths, so
        # that CKAN will use this plugin's custom templates.
        tk.add_template_directory(config, 'templates')

        # Register this plugin's fanstatic directory with CKAN.
        tk.add_resource('fanstatic', 'fiware_header')

        # Add this plugin's public dir to CKAN's extra_public_paths, so
        # that CKAN will use this plugin's custom static files.
        tk.add_public_directory(config, 'public')
